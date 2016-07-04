var models = require("../../models");
var STATUS = require('../status.js');
var loginSuccess = require('./loginSuccess.js');

var RegistrateRecord = {};
var contestArray = [];

RegistrateRecord.getRegistrateRecord = function(req, res) {

  var contest;
  var contests = [];
  var state = loginSuccess.getPage(req.session.info);

  models.User.findOne({
    where: {
      userId: req.session.info.userId
    }
  }).then(function(data) {

    var contestId = data.dataValues.contestId;
    contestArray = data.dataValues.contestArray;

    if (contestId) {
      models.Contest.findOne({
        where: {
          contestId: contestId
        }
      }).then(function(data) {
        contest = data.dataValues;
        res.render("fontStage/registrate_record", {
          contest: contest,
          record: 1,
          state:state
        });
      });
    } else {
      res.render("fontStage/registrate_record", {
        record: 0,
        state:state
      });
    }
  });
};

RegistrateRecord.getContest = function(req, res) {
  if (contestArray) {
    // var contestArray=[];
  }



};


module.exports = RegistrateRecord;
