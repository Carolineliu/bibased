var express = require('express');
var JudgeManager = require('../../controllers/admin/judge_manager.js');

var router = express.Router();

router.get('/', JudgeManager.getJudgeManager);
router.post("/addJudge", JudgeManager.addJudges);
// router.post("/deleteJudge", JudgeManager.deleteJudge);

module.exports = router;
