var express = require('express');
var WinnersManager = require('../../controllers/admin/winners_manager.js');

var router = express.Router();

router.get('/', WinnersManager.getWinnersManager);
router.post('/', WinnersManager.getWinnersType);
router.post('/release',WinnersManager.releaseWinners);



module.exports = router;
