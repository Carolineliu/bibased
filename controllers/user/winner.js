var models = require("../../models");
var STATUS = require('../status.js');
var Unique = require('../unique.js');
var loginSuccess = require('./loginSuccess.js');

var Winner = {};

Winner.getWinner = function(req, res) {
  var length;
  var contests = [];
  var year = [];
  var schools = [];
  var state = loginSuccess.getPage(req.session.info);

  models.Contest.findAll({
    where: {
      isWin: ["一等奖", "二等奖", "三等奖"]
    }
  }).then(function(data) {
    length = data.length;
    for (var i = 0; i < data.length; i++) {
      year.push(data[i].dataValues.year);
      contests.push(data[i].dataValues);
    }
    return models.School.findAll();
  }).then(function(data) {
    for (var i = 0; i < data.length; i++) {
      schools.push(data[i].dataValues);
    }

    year = Unique.unique(year);

    var obj = {
      year: year,
      contests: contests,
      schools: schools,
      length: length,
      state: state
    };
    res.render("fontStage/winner", obj);
  });
};

Winner.getWinnersType = function(req, res) {
  var data = req.body.data;
  var obj = {};
  if (data.award == "全部" && data.school == "全部") {
    obj = {
      year: data.year,
      isWin: ["一等奖", "二等奖", "三等奖"]
    };
  } else if (data.award == "全部") {
    obj = {
      year: data.year,
      schoolName: data.school,
      isWin: ["一等奖", "二等奖", "三等奖"]
    };
  } else if (data.school == "全部") {
    obj = {
      year: data.year,
      isWin: data.award
    };
  } else {
    obj = {
      year: data.year,
      isWin: data.award,
      schoolName: data.school
    };
  }
  var winners = [];
  models.Contest.findAll({
    where: obj
  }).then(function(data) {
    if (data) {
      for (var i = 0; i < data.length; i++) {
        winners.push(data[i].dataValues);
      }
      console.log(winners);
      res.send({
        data: winners
      });
    } else {
      res.send({
        status: STATUS.NOT_FOUND
      });
    }
  });
};



module.exports = Winner;
