var express = require('express');
var News = require('../../controllers/user/news.js');
var router = express.Router();

router.get('/', News.getNews);


module.exports = router;
