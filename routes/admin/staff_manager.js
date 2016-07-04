var express = require('express');
var StaffManager = require('../../controllers/admin/staff_manager.js');

var router = express.Router();

router.get('/', StaffManager.getStaffManager);
router.delete("/delete",StaffManager.deleteStaffManager);
router.post("/pagination",StaffManager.getPagination);


module.exports = router;
