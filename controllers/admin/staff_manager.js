var models = require("../../models");
var STATUS = require('../status.js');

var StaffManager = {};

StaffManager.getStaffManager = function(req, res) {

  if (req.session.adminName) {
    var staffs = [];
    models.Staff.findAll().then(function(data) {
      for (var i = 0; i < data.length; i++) {
        staffs.push(data[i].dataValues);
      }
      res.render("admin/staff_manager", {
        staffs: staffs
      });
    });
  } else {
    res.redirect("login");
  }
};

StaffManager.deleteStaffManager = function(req, res) {

  var staffId = req.body.array;

  models.Staff.destroy({
    where: {
      staffId: staffId
    }
  }).then(function(data) {
    if (data) {
      res.send({
        status: STATUS.DATA_SUCCESS
      });
    } else {
      res.send({
        status: STATUS.INS_ERROR
      });
    }
  });
};

StaffManager.getPagination = function(req, res) {
  var staffs = [];
  var data = req.body.data * 8;
  models.Staff.findAll({
    where: {
      $and: [{
        staffId: {
          gt: data
        }
      }, {
        staffId: {
          lt: data + 9
        }
      }]
    }
  }).then(function(data) {
    for (var i = 0; i < data.length; i++) {
      staffs.push(data[i].dataValues);
    }
    res.send({
      data: staffs
    });
  });
};


module.exports = StaffManager;
