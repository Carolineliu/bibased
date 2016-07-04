var express = require('express');
var UpdatePassword = require('../../controllers/user/update_password.js');
var router = express.Router();

router.get('/', UpdatePassword.getUpdatePassword);
router.post('/reset', UpdatePassword.updatePassword);



module.exports = router;
