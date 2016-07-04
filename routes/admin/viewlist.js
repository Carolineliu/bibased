var express = require('express');
var ViewList = require('../../controllers/admin/viewlist.js');

var router = express.Router();

router.get('/', ViewList.getSemifinalList);
router.delete("/delete",ViewList.deleteSemifinalList);



module.exports = router;
