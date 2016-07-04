var express = require('express');
var HomePage = require('../../controllers/staff/home_page.js');

var router = express.Router();

router.get('/', HomePage.getHomePage);


module.exports = router;
