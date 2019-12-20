const mongo = require('../../mongoConnect');

const tokenModel = mongo.mongoose.model(
  'tokenstore',
  mongo.tokenSchema,
  'tokenStore'
);

function checkToken(userData, callback) {
  condition = {
    UserId: userData.UserId,
    token: userData.token
  };
  tokenModel.find(condition, (error, result) => {
    if (error) {
      callback(error);
    } else {
      if (result !== null) {
        callback(null, { statusCode: 200 });
      } else {
        callback(null, { statusCode: 401, msg: 'Token not found' });
      }
    }
  });
}

function deleteToken(userData, callback) {
  tokenModel.deleteOne(userData, (error, result) => {
    if (error) {
      callback({ msg: 'Error in deleting token' });
    } else {
      callback(null, result);
    }
  });
}

function saveToken(tokenDetails, callback) {
  tokenModel.find(tokenDetails, (error, result) => {
    if (error) {
      callback(error);
    } else {
      if (result !== null) {
        callback(null, { result: result, msg: 'already exist' });
      } else {
        tokenModel.create(tokenDetails, (err, res) => {
          if (err) {
            callback(err);
          } else {
            callback(null, { result: res, msg: 'new token created' });
          }
        });
      }
    }
  });
}

module.exports = {
  checkToken,
  deleteToken,
  saveToken
};
