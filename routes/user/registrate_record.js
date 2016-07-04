var express = require('express');
var RegistrateRecord = require('../../controllers/user/registrate_record.js');
var router = express.Router();

router.get('/', RegistrateRecord.getRegistrateRecord);
router.get('/getContestArray', RegistrateRecord.getContest);

module.exports = router;
