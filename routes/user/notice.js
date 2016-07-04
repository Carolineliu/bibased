var express = require('express');
var Notice = require('../../controllers/user/notice.js');
var router = express.Router();

router.get('/', Notice.getNotice);


module.exports = router;
