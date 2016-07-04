var express = require('express');
var KindEditor = require('../../controllers/admin/kindeditor.js');

var router = express.Router();

router.get('/', KindEditor.getKindEditor);
router.post("/uploadImage", KindEditor.uploadImage);
router.post("/release", KindEditor.releasePage);
// router.post("/deleteJudge", KindEditor.deleteJudge);

module.exports = router;
