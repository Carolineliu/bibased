var express = require('express');
var HomePage = require('../../controllers/judge/home_page.js');

var router = express.Router();

router.get('/', HomePage.getHomePage);
router.post("/", HomePage.getStudentWorks);



module.exports = router;
