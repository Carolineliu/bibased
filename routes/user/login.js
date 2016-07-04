var express = require('express');
var Login = require('../../controllers/user/login.js');

var router = express.Router();

router.get('/', Login.getLogin);
router.post('/confirm', Login.confirm);


module.exports = router;
