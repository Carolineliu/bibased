var models = require("../../models");
var STATUS = require('../status.js');
var loginSuccess = require('./loginSuccess.js');


var Login = {};

Login.getLogin = function(req, res) {
  var state = loginSuccess.getPage(req.session.info);
  res.render("fontStage/login",{
    state:state
  });
};

Login.confirm = function(req, res) {
  var userName = req.body.userName;
  var password = req.body.password;
  res.cookie("userName", userName, {
    path: "/",
    maxAge: 900000,
    httpOnly: false
  });
  models.User.findOne({
    where: {
      userName: userName,
      password: password
    }
  }).then(function(data) {
    if (data) {
      var info = {
        userName: userName,
        password: password,
        userId: data.dataValues.userId
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



module.exports = Login;
