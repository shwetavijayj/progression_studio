// const app = require('./app');
var jwt = require('jsonwebtoken');
var tokenStore = '';

var jwtsettings = {
  jwtSecret: 'hellothisismysecretkey'
};

// app.set('jwtSecret', jwtsettings.jwtSecret);

function createToken(data) {
  tokenStore = jwt.sign({ data }, 'hellothisismysecretkey', {
    expiresIn: 1800
  });
  return tokenStore;
}

module.exports = {
  createToken
};
