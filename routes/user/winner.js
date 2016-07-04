var express = require('express');
var Winner = require('../../controllers/user/winner.js');

var router = express.Router();

router.get('/', Winner.getWinner);
router.post('/', Winner.getWinnersType);


module.exports = router;
