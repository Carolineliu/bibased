var express = require('express');
var PersonalInfo = require('../../controllers/user/personalInfo.js');
var router = express.Router();

router.get('/', PersonalInfo.getPersonalInfo);
router.post('/save', PersonalInfo.updatePersonalInfo);


module.exports = router;
