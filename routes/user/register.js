var express = require('express');
var Register = require('../../controllers/user/register.js');
var router = express.Router();

router.get('/', Register.getRegister);
router.get('/register', Register.isSameName);
router.get('/isSameEmail', Register.isSameEmail);
router.post('/register', Register.verify);

module.exports = router;
