var models = require("../../models");
var STATUS = require('../status.js');
var loginSuccess = require('./loginSuccess.js');

var NoticeDetail = {};


NoticeDetail.getNoticeDetail = function(req, res) {
  var url = req.url;
  url = url.split("?")[1];
  var noticeId = url.split("=")[1];
  var state=loginSuccess.getPage(req.session.info);
  console.log(noticeId);

  models.Notice.findOne({
    where: {
      noticeId: noticeId
    }
  }).then(function(data) {
    var obj=data.dataValues;
    obj.state=state;
    res.render("fontStage/notice_detail", obj);
  });



};

module.exports = NoticeDetail;
