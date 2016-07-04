var express = require('express');
var Schedule = require('../../controllers/user/schedule.js');
var router = express.Router();

router.get('/', Schedule.getSchedule);


module.exports = router;
