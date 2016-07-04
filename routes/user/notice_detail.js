var express = require('express');
var NoticeDetail = require('../../controllers/user/notice_detail.js');
var router = express.Router();

router.get('/', NoticeDetail.getNoticeDetail);


module.exports = router;
