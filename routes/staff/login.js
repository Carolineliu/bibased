var express = require('express');
var StaffLogin = require('../../controllers/staff/login.js');

var router = express.Router();

router.get('/', StaffLogin.getStaffLogin);
router.post("/confirm",StaffLogin.confirm);



module.exports = router;
