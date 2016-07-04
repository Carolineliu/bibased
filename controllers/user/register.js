var models = require("../../models");
var STATUS = require('../status.js');
var loginSuccess = require('./loginSuccess.js');

var Register = {};

Register.getRegister = function(req, res) {
  res.render('fontStage/register', {
    state: loginSuccess.getPage(req.session.info)
  });
};

Register.isSameName = function(req, res) {
  var userName = req.query.username;
  models.User.findAll({
    where: {
      userName: userName
    }
  }).then(function(data) {
    if (data.length === 0) {
      status = STATUS.DATA_SUCCESS;
    } else {
      status = STATUS.SERVER_ERROR;
    }
    res.send(status);
  });
};

Register.isSameEmail = function(req, res) {
  var email = req.query.email;
  models.User.findAll({
    where: {
      email: email
    }
  }).then(function(data) {
    if (data.length === 0) {
      status = STATUS.DATA_SUCCESS;
    } else {
      status = STATUS.SERVER_ERROR;
    }
    res.send(status);
  });
};

Register.verify = function(req, res) {

  var info = req.body;
  console.log(info);

  models.User.create({
    password: info.password,
    userName: info.userName,
    name: info.name,
    gender: info.gender,
    telephone: info.telephone,
    email: info.email
  }).then(function(data) {
    if (data.length === 0) {
      res.send({
        status: STATUS.INS_ERROR
      });
    } else {
      res.send({
        status: STATUS.DATA_SUCCESS,
        message: {}
      });
    }
  });
};

module.exports = Register;
