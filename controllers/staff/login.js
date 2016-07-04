var models = require("../../models");
var STATUS = require('../status.js');

var StaffLogin = {};

StaffLogin.getStaffLogin = function(req, res) {
  res.render("staff/login");
};

StaffLogin.confirm = function(req, res) {
  var staffName = req.body.staffName;
  var password = req.body.password;
  var schoolName = req.body.schoolName;

  models.Staff.findOne({
    where: {
      staffName: staffName,
      staffPassword: password,
      schoolName: schoolName
    }
  }).then(function(data) {
    if (data) {
      var info = {
        staffName: staffName,
        password: password
      };
      req.session.info = info;
      res.send({
        status: STATUS.DATA_SUCCESS,
        message: {},
        data: {}
      });
    } else {
      res.send({
        status: STATUS.SERVER_ERROR,
        message: {},
        data: {}
      });
    }
  });
};



module.exports = StaffLogin;
