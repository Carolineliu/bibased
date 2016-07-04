var models = require("../../models");
var STATUS = require('../status.js');
var loginSuccess = require('./loginSuccess.js');

var ContestDetail = {};

ContestDetail.getContestDetail = function(req, res) {
  var url = req.url;
  url = url.split("?")[1];
  var contestId = url.split("=")[1];
  var state = loginSuccess.getPage(req.session.info);

  models.Contest.findOne({
    where: {
      contestId: contestId
    }
  }).then(function(data) {
    var obj=data.dataValues;
    obj.state=state;
    console.log(obj);
    res.render("fontStage/contest_detail", obj);
  });
};

module.exports = ContestDetail;
