var express = require('express');
var router = express.Router();
const login = require('../controller/users/login');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/login', function(req, res) {
  console.log(req.body);
  login.authenticateUser(req.body, (error, response) => {
    if (error) {
      res.send({ 'Error is ': error });
    } else {
      console.log('response', response);
      res.send({ msg: response });
    }
  });
});

router.get('/testData', function(req, res) {
  login.fetchTestData((error, response) => {
    if (error) {
      res.send({ 'Error is ': error });
    } else {
      res.send(response);
    }
  });
});

module.exports = router;
