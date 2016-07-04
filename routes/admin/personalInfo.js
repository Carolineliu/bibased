var express = require('express');
var PersonalInfo = require('../../controllers/admin/personalInfo.js');

var router = express.Router();

router.get('/', PersonalInfo.getPersonalInfo);

module.exports = router;
