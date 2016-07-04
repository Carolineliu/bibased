var express = require('express');
var NoticeManager = require('../../controllers/admin/notice_manager.js');

var router = express.Router();

router.get('/', NoticeManager.getNoticeManager);
router.delete('/delete', NoticeManager.deleteNotice);
router.put("/homePage", NoticeManager.settingHomePage);
router.put("/newsPage", NoticeManager.settingNewsPage);

module.exports = router;
