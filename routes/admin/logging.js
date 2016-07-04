var express = require('express');
var multer = require("../../controllers/multerUtil.js");
var Logging = require('../../controllers/admin/logging.js');

var router = express.Router();

router.get('/', Logging.getLogging);
router.post("/uploadPrelim", multer.single('prelim'), Logging.uploadPrelim);
router.get("/downloadPrelim", Logging.downloadPrelim);
router.post("/uploadFinal", multer.single('final'), Logging.uploadFinal);
router.get("/downloadFinal", Logging.downloadFinal);
router.get("/download", Logging.download);

module.exports = router;
