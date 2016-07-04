var models = require("../../models");
var STATUS = require('../status.js');
var loginSuccess = require('./loginSuccess.js');

var HomePage = {};

HomePage.getHomePage = function(req, res) {
  var news = [];
  var notices = [];
  var contests = [];
  var state = loginSuccess.getPage(req.session.info);

  models.New.findAll({
    where: {
      state: "首页"
    }
  }).then(function(data) {
    data.forEach(function(val) {
      news.push(val.dataValues);
    });
    return models.Notice.findAll({
      where: {
        state: "首页"
      }
    }).then(function(data) {
      data.forEach(function(val) {
        notices.push(val.dataValues);
      });
      return models.Contest.findAll({
        where: {
          isWin: ["一等奖", "二等奖", "三等奖"]
        }
      });
    }).then(function(data) {
      for (var i = 0; i < data.length; i++) {
        if (i < 6) {
          contests.push(data[i].dataValues);
        }
      }
      res.render("fontStage/home_page", {
        news: news,
        notices: notices,
        contests: contests,
        state: state
      });
    });
  });
};


module.exports = HomePage;
