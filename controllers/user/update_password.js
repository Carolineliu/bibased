var models = require("../../models");
var STATUS = require('../status.js');
var loginSuccess = require('./loginSuccess.js');

var UpdatePassword = {};

UpdatePassword.getUpdatePassword = function(req, res) {
  if (req.session.info) {
    res.render("fontStage/update_password", {
      state: 1
    });
  } else {
    res.redirect("login");
  }
};

UpdatePassword.updatePassword = function(req, res) {
  var password = req.body.oldPass;
  var confirmPass = req.body.confirmPass;
  if (password == req.session.info.password) {
    models.User.update({
      password: confirmPass
    }, {
      where: {
        userName: req.session.info.userName
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
