var express = require('express');
var ContestManager = require('../../controllers/admin/contest_manager.js');

var router = express.Router();

router.get('/', ContestManager.getContestManager);
router.post("/", ContestManager.getChangePage);
router.post("/pagination", ContestManager.getPagination);
router.post("/selectPagination", ContestManager.getSelectPagination);



module.exports = router;
