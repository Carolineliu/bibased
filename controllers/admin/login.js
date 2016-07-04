var models = require("../../models");
var STATUS = require('../status.js');

var Login = {};

Login.getLogin = function(req, res) {
  res.render("admin/login");
};

Login.verify = function(req, res) {
  var adminName = req.query.adminName;
  models.Admin.findAll({
    where: {
      adminName: adminName,
      password: req.query.password
    }
  }).then(function(data) {
    if (data.length !== 0) {
      res.cookie("adminName", adminName, {
        path: "/admin",
        maxAge: 900000,
        httpOnly: false
      });
      req.session.adminName = adminName;
      req.session.password = req.query.password;
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


module.exports = Login;
