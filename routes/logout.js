var express = require('express');
var Logout = require('../controllers/logout.js');

var router = express.Router();

router.delete('/', Logout.getLogout);



module.exports = router;
