var models = require("../../models");
var STATUS = require('../status.js');
var loginSuccess = require('./loginSuccess.js');

var News = {};

News.getNews = function(req, res) {
  var news = [];
  var state = loginSuccess.getPage(req.session.info);

  models.New.findAll({
    where: {
      state: "新闻页"
    }
  }).then(function(data) {
    for (var i = 0; i < data.length; i++) {
      news.push(data[i].dataValues);
    }
  });

  res.render("fontStage/news", {
    news: news,
    state: state
  });
};





module.exports = News;
