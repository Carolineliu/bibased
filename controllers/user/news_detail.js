var models = require("../../models");
var STATUS = require('../status.js');
var loginSuccess = require('./loginSuccess.js');

var NewsDetail = {};


NewsDetail.getNewsDetail = function(req, res) {
  var url = req.url;
  url = url.split("?")[1];
  var newsId = url.split("=")[1];
  var state=loginSuccess.getPage(req.session.info);

  models.New.findOne({
    where: {
      newsId: newsId
    }
  }).then(function(data) {
    var obj=data.dataValues;
    obj.state=state;
    res.render("fontStage/news_detail", obj);
  });


};

module.exports = NewsDetail;
