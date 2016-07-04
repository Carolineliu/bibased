var models = require("../../models");
var STATUS = require('../status.js');

var SchoolManager = {};

SchoolManager.getSchoolManager = function(req, res) {
  if (req.session.adminName) {
    var schools = [];
    models.School.findAll().then(function(data) {
      for (var i = 0; i < data.length; i++) {
        schools.push(data[i].dataValues);
      }
      res.render("admin/school_manager", {
        schools: schools
      });
    });
  } else {
    res.redirect("login");
  }
};

SchoolManager.deleteSchool = function(req, res) {
  var array = req.body.array;
  models.School.destroy({
    where: {
      schoolId: array
    }
  }).then(function(data) {
    if (data) {
      res.send({
        status: STATUS.DATA_SUCCESS
      });
    } else {
      res.send({
        status: STATUS.NOT_FOUND
      });
    }
  });
};
SchoolManager.addSchool = function(req, res) {
  models.School.findAll({
    where: {
      $or: [{
        schoolId: req.body.schoolId
      }, {
        schoolName: req.body.schoolName
      }]
    }
  }).then(function(data) {
    if (data.length <= 0) {
      models.School.create({
        schoolId: req.body.schoolId,
        schoolName: req.body.schoolName
      }).then(function(data) {
        if (data) {
          res.send({
            status: STATUS.DATA_SUCCESS,
            message: {},
            data: {}
          });
        } else {
          res.send({
            status: STATUS.PARAM_ERROR,
            message: {},
            data: {}
          });
        }
      });
    } else {
      res.send({
        status: STATUS.QUR_ERROR
      });
    }
  });

};

SchoolManager.updateSchoolName = function(req, res) {
  var schoolName = req.body.schoolName;
  var schoolId = req.body.schoolId;
  models.School.update({
    schoolName: schoolName
  }, {
    where: {
      schoolId: schoolId
    }
  }).then(function(data) {
    if (data) {
      res.send({
          status: STATUS.DATA_SUCCESS
        }

      );

    } else {
      res.send({
        status: STATUS.UPD_ERROR
      });

    }

  });

};


module.exports = SchoolManager;
