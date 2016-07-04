var models = require("../../models");
var STATUS = require('../status.js');

var UpdatePassword = {};

UpdatePassword.getUpdatePassword = function(req, res) {
  if (req.session.adminName) {
    res.render("admin/update_password");
  } else {
    res.redirect("login");
  }
};

UpdatePassword.updatePassword = function(req, res) {
  var password = req.body.oldPass;
  var confirmPass = req.body.confirmPass;

  if (password == req.session.password) {
    models.Admin.update({
      password: confirmPass
    }, {
      where: {
        adminName: req.session.adminName
      }
    }).then(function(data) {
      if (data) {
        res.send({
          status: STATUS.DATA_SUCCESS
        });
      } else {
        res.send({
          status: STATUS.UPD_ERROR
        });
      }
    });
  } else {
    res.send({
      status: STATUS.NOT_FOUND
    });
  }
};


module.exports = UpdatePassword;
