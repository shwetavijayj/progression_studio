var express = require('express');
var router = express.Router();
const login = require('../controller/users/login');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
  console.log(req.body);
  // login.authenticateUser(req.body, (error, response) => {
  //   if (error) {
  //     res.send(error);
  //   } else {
  //     console.log('response', response);
  //     res.send(response);
  //   }
  // });
  res.send({ msg: 'hello' });
});

module.exports = router;
