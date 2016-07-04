var express = require('express');
var SchoolManager = require('../../controllers/admin/school_manager.js');

var router = express.Router();

router.get('/', SchoolManager.getSchoolManager);
router.delete("/delete", SchoolManager.deleteSchool);
router.post("/save", SchoolManager.updateSchoolName);
router.post("/add", SchoolManager.addSchool);

module.exports = router;
