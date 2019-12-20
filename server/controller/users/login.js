const uniqid = require('uniqid');
const mongo = require('../../mongoConnect');
const userModel = mongo.mongoose.model('User', mongo.userSchema, 'users');
const tokenManager = require('../../tokenManagement');
const saveToken = require('./checkToken');
const loginModel = mongo.mongoose.model(
  'loginStatus',
  mongo.loginStatusSchema,
  'loginStatus'
);

function saveLoginInformation(loggedInUserDetails, callback) {
  userDetails = {
    LoginStatusId: uniqid.process(),
    userName: loggedInUserDetails.userName,
    DateTime: loggedInUserDetails.DateTime,
    IPAddress: loggedInUserDetails.IPAddress
  };
  loginModel.create(userDetails, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, { msg: 'Data store successfully.', result: res });
    }
  });
}

function authenticateUser(userDetails, callback) {
  userCredentials = {
    userName: userDetails.userName,
    password: userDetails.password
  };
  userModel.findOne(userDetails, (findUserError, findUserResult) => {
    if (findUserError) {
      callback(findUserError);
    } else {
      if (findUserResult != null) {
        const token = tokenManager.createToken(userCredentials);
        const storeTokenInfo = {
          userId: findUserResult.userId,
          token: token
        };
        saveToken.saveToken(storeTokenInfo, (storeTokenErr, storeTokenRes) => {
          if (storeTokenErr) {
            callback(storeTokenErr);
          } else {
            const loginData = {
              userName: userDetails.userName,
              DateTime: new Date(),
              IPAddress: userDetails.clientIp
            };
            saveLoginInformation(
              loginData,
              (saveLoginDataError, saveLoginDataRes) => {
                if (saveLoginDataError) {
                  callback(saveLoginDataError);
                } else {
                  callback(null, { statusCode: 200, msg: 'Log in success' });
                }
              }
            );
          }
        });
      }
    }
  });
}
module.exports = {
  authenticateUser,
  saveLoginInformation
};
