var models = require("../../models");
var STATUS = require('../status.js');
var Unique = require("../unique.js");

var WinnersManager = {};

WinnersManager.getWinnersManager = function(req, res) {

  if (req.session.adminName) {
    var score = [];
    var scores = [];
    var year = [];
    var school = [];

    models.Contest.findAll({
      where: {
        contestScore: {
          gt: 0
        }
      }
    }).then(function(data) {

      for (var i = 0; i < data.length; i++) {
        year.push(data[i].dataValues.year);
        school.push(data[i].dataValues.schoolName);
        if (data[i].dataValues.year == new Date().getFullYear()) {
          score.push(data[i].dataValues);
        }
      }

      year.sort(function(a, b) {
        return a > b ? -1 : 1;
      });
      score.sort(function(a, b) {
        var flag = 0;
        if (a.studentScore > b.studentScore) {
          flag = -1;
        } else if (a.studentScore < b.studentScore) {
          flag = 1;
        }
        if (flag === 0) {
          if (a.final > b.final) {
            flag = -1;
          } else if (a.final < b.final) {
            flag = 1;
          }
        }
        return flag;
      });

      var array = ["一等奖", "二等奖", "二等奖", "三等奖", "三等奖", "三等奖"];
      for (i = 0; i < score.length; i++) {
        models.Contest.update({
          isWin: array[i]
        }, {
          where: {
            contestId: score[i].contestId
          }
        });
      }

      for (i = 0; i < score.length; i++) {
        if (i < array.length) {
          scores.push(score[i]);
        }
      }

      school = Unique.unique(school);
      year = Unique.unique(year);

      res.render("admin/winners_manager", {
        year: year,
        school: school,
        score: scores
      });

    });
  } else {
    res.redirect("login");
  }
};

WinnersManager.getWinnersType = function(req, res) {
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
WinnersManager.releaseWinners = function(req, res) {
  models.Contest.update({
    schedule: "发布成绩"
  }, {
    where: {
      year: new Date().getFullYear(),
      isWin: ["一等奖", "二等奖", "三等奖"]
    }
  }).then(function(data) {

  });
};


module.exports = WinnersManager;
