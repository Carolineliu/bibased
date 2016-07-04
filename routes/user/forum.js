var express = require('express');
var Forum = require('../../controllers/user/forum.js');

var router = express.Router();

router.get('/', Forum.getForum);



module.exports = router;
