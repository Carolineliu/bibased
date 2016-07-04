var express = require('express');
var Contest = require('../../controllers/user/contest.js');
var router = express.Router();

router.get('/', Contest.getContest);
router.post('/pagination', Contest.getPagination);
router.post('/getTypes', Contest.getTypes);
router.post('/selectPagination', Contest.selectPagination);



module.exports = router;
