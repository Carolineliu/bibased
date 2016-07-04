var express = require('express');
var Logout = require('../../controllers/user/logout.js');

var router = express.Router();

router.get('/', Logout.getLogout);



module.exports = router;
