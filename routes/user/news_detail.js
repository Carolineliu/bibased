var express = require('express');
var NewsDetail = require('../../controllers/user/news_detail.js');
var router = express.Router();

router.get('/', NewsDetail.getNewsDetail);


module.exports = router;
