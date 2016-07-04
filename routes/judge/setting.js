var express = require('express');
var Setting = require('../../controllers/judge/setting.js');

var router = express.Router();

router.get('/', Setting.getSetting);
router.get('/modify', Setting.modify);


module.exports = router;
