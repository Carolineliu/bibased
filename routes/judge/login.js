var express = require('express');
var Login = require('../../controllers/judge/login.js');

var router = express.Router();

router.get('/', Login.getLogin);
router.get('/verify', Login.verify);


module.exports = router;
