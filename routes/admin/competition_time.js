var express = require('express');
var CompetitionTime = require('../../controllers/admin/competition_time.js');

var router = express.Router();

router.get('/', CompetitionTime.getCompetitionTime);
router.post("/",CompetitionTime.setComepetitionTime);

module.exports = router;
