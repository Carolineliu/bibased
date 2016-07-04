var express = require('express');
var FindPassword = require('../../controllers/user/findPassword.js');
var router = express.Router();

router.get('/', FindPassword.getFindPassword);
router.post('/findPassword', FindPassword.findPassword);


module.exports = router;
