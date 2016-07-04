var express = require('express');
var UserManager = require('../../controllers/admin/user_manager.js');

var router = express.Router();

router.get('/', UserManager.getUserManager);
router.delete('/delete', UserManager.deleteUser);
router.post("/pagination", UserManager.getPagination);


module.exports = router;
