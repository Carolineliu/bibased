var express = require('express');
var SubmitMessage = require('../../controllers/user/submit_message.js');

var router = express.Router();

router.get('/', SubmitMessage.getSubmitMessage);
// router.get('/adminLogin', AdminLogin.confirm);


module.exports = router;
