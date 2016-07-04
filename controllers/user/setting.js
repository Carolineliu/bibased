var models = require("../../models");
var STATUS = require('../status.js');
var loginSuccess = require('./loginSuccess.js');

var Setting = {};

Setting.getSetting = function(req, res) {
  var state = loginSuccess.getPage(req.session.info);
  res.render("fontStage/setting", {
    state: state
  });
};

Setting.modify = function(req, res) {
  var userId = req.session.userId;
  models.User.update({
    password: req.query.password
  }, {
    where: {
      userId: userId
    }
  }).then(function(data) {
    if (data.length !== 0) {
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


module.exports = Setting;
