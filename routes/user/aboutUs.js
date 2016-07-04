var express = require('express');
var AboutUs = require('../../controllers/user/aboutUs.js');

var router = express.Router();

router.get('/', AboutUs.getAboutUs);



module.exports = router;
