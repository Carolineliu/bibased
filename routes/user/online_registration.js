var express = require('express');
var multer = require("../../controllers/multerUtil.js");

var OnlineRegistration = require('../../controllers/user/online_registration.js');

var router = express.Router();

router.get('/', OnlineRegistration.getOnlineRegistration);
router.get('/download', OnlineRegistration.downloadModel);
router.post('/submit', OnlineRegistration.submit);


module.exports = router;
