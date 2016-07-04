var models = require("../../models");
var STATUS = require('../status.js');

var UserManager = {};

UserManager.getUserManager = function(req, res) {
  if (req.session.adminName) {
    var users = [];
    models.User.findAll().then(function(data) {
      for (var i = 0; i < data.length; i++) {
        users.push(data[i].dataValues);
      }
      res.render("admin/user_manager", {
        users: users,
        length: users.length
      });
    });
  } else {
    res.redirect("login");
  }
};

UserManager.deleteUser = function(req, res) {

  var userId = req.body.array;

  models.User.destroy({
    where: {
      userId: userId
    }
  }).then(function(data) {
    if (data) {
      res.send({
        status: STATUS.DATA_SUCCESS
      });
    } else {
      res.send({
        status:STATUS.INS_ERROR
      });
    }
  });
};
UserManager.getPagination = function(req, res) {
  var users = [];
  var datas = req.body.data * 8;
  models.User.findAll().then(function(data) {
    for (var i = datas; i < datas+8; i++) {
      users.push(data[i].dataValues);
    }
    res.send({
      data: users
    });
  });
};


module.exports = UserManager;
