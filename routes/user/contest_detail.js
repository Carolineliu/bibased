var express = require('express');
var ContestDetail = require('../../controllers/user/contest_detail.js');
var router = express.Router();

router.get('/', ContestDetail.getContestDetail);


module.exports = router;
