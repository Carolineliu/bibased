var express = require('express');
var NewsManager = require('../../controllers/admin/news_manager.js');

var router = express.Router();

router.get('/', NewsManager.getNewsManager);
router.delete('/delete', NewsManager.deleteNews);
router.put("/homePage", NewsManager.settingHomePage);
router.put("/newsPage", NewsManager.settingNewsPage);


module.exports = router;
