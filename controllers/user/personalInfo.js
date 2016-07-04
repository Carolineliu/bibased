var models = require("../../models");
var STATUS = require('../status.js');
var loginSuccess = require('./loginSuccess.js');

var PersonalInfo = {};

PersonalInfo.getPersonalInfo = function(req, res) {
  var personalInfos = [];
  var info = req.session.info;
  var state = loginSuccess.getPage(req.session.info);

  if (info) {
    models.User.findOne({
      where: info
    }).then(function(data) {
      res.render("fontStage/personalInfo", {
        personalInfos: data.dataValues,
        state: state
      });
    });
  } else {
    res.redirect("login");
  }
};

PersonalInfo.findUserName = function(req, res) {
  var userName = req.query.userName;
  var status;
  models.User.findAll({
    where: {
      userName: userName
    }
  }).then(function(data) {
    console.log(data);
    if (!data.length) {
      status = STATUS.DATA_SUCCESS;
    } else {
      status = STATUS.SERVER_ERROR;
    }
    console.log(status);
    res.send({
      status: status
    });
  });
};


PersonalInfo.updatePersonalInfo = function(req, res) {
  var data = req.body;

  if (req.session) {
    models.User.update(
      data, {
        where: {
          userId: req.session.info.userId
        }
      }
    ).then(function(data) {
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
  }

};


module.exports = PersonalInfo;
