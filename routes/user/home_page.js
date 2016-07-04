var express = require('express');
var HomePage = require('../../controllers/user/home_page.js');

var router = express.Router();

router.get('/', HomePage.getHomePage);

// router.get('/adminLogin', AdminLogin.confirm);


module.exports = router;
