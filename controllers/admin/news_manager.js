var models = require("../../models");
var STATUS = require('../status.js');

var NewsManager = {};

NewsManager.getNewsManager = function(req, res) {
  if (req.session.adminName) {
    var news = [];
    models.New.findAll().then(function(data) {

      for (var i = 0; i < data.length; i++) {
        news.push(data[i].dataValues);
      }
      res.render("admin/news_manager", {
        news: news
      });
    });
  } else {
    res.redirect("login");
  }
};


NewsManager.deleteNews = function(req, res) {
  var newsId = req.body.newsId;
  models.New.destroy({
    where: {
      newsId: newsId
    }
  }).then(function(data) {
    if (data) {
      res.send({
        status: STATUS.DATA_SUCCESS
      });
    } else {
      res.send({
        status: STATUS.DEL_ERROR
      });
    }


  });
};

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var time=year+"/"+month+"/"+day;

NewsManager.settingHomePage = function(req, res) {
  var newsId = req.body.newsId;

  models.New.update({
    state: "首页",
    newsTime:time
  }, {
    where: {
      newsId: newsId
    }
  }).then(function(data) {
    if (data) {
      res.send({
        status: STATUS.DATA_SUCCESS
      });
    } else {
      res.send({
        status: STATUS.INS_ERROR
      });
    }
  });
};

NewsManager.settingNewsPage = function(req, res) {
  var newsId = req.body.newsId;

  models.New.update({
    state: "新闻页",
    newsTime:time
  }, {
    where: {
      newsId: newsId
    }
  }).then(function(data) {
    if (data) {
      res.send({
        status: STATUS.DATA_SUCCESS
      });
    } else {
      res.send({
        status: STATUS.INS_ERROR
      });
    }
  });
};


module.exports = NewsManager;
