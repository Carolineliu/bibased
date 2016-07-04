var express = require('express');
var Logout = require('../../controllers/admin/logout.js');

var router = express.Router();

router.get('/', Logout.getLogout);

module.exports = router;
