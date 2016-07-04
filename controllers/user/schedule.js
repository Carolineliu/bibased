var models = require("../../models");
var STATUS = require('../status.js');
var loginSuccess = require('./loginSuccess.js');

var Schedule = {};

Schedule.getSchedule = function(req, res) {
  var state = loginSuccess.getPage(req.session.info);
  var url = req.url;
  url = url.split("?")[1];
  var contestId = url.split("=")[1];

  models.Contest.findOne({
    where: {
      contestId: contestId
    }
  }).then(function(data) {
    var obj = data.dataValues;
    obj.state = state;
    res.render('fontStage/schedule', obj);
  });

};

module.exports = Schedule;
