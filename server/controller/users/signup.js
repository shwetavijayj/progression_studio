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

function userSignUpStepOne(stepOneDetails, callback) {
  userData = {
    userId: uniqid.process(),
    userName: userDetails.userName,
    password: userDetails.password
  };
}

function userSignUpStepTwo(stepTwoDetails, callback) {
  userData = {
    userId: uniqid.process(),
    userName: userDetails.userName,
    password: userDetails.password
  };
  userModel.findOne({ userName: stepTwoDetails.userName }, (err, res) => {
    if (err) {
      callback(err);
    } else {
      if (res === null) {
        userModel.create(userData, (errorUserDataStore, resUserDataStore) => {
          if (errorUserDataStore) {
            callback(errorUserDataStore);
          } else {
            callback(null, { statusCode: 200, msg: 'Data stored success' });
          }
        });
      } else {
        callback({ statusCode: 422, msg: 'Username already exist' });
      }
    }
  });
}

function userSignUpStepThree(stepThreeDetails, callback) {}
function userSignUpStepFour(stepFourDetails, callback) {}

function userAlreadyExist(userDetails, callback) {
  userModel.findOne({ userName: userDetails }, (error, response) => {
    if (error) {
      callback(error);
    } else {
      if (response !== null) {
        callback(null, { statusCode: 422, msg: 'user already exist' });
      } else {
        callback(null, { statusCode: 200, msg: 'No user found' });
      }
    }
  });
}

module.exports = {
  userSignUp,
  userSignUpStepOne,
  userSignUpStepTwo,
  userSignUpStepThree,
  userSignUpStepFour,
  userAlreadyExist
};
