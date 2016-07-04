var models = require("../../models");
var STATUS = require('../status.js');

var NoticeManager = {};

NoticeManager.getNoticeManager = function(req, res) {

  if (req.session.adminName) {
    var notices = [];
    models.Notice.findAll().then(function(data) {
      for (var i = 0; i < data.length; i++) {
        notices.push(data[i].dataValues);
      }
      res.render("admin/notice_manager", {
        notices: notices
      });
    });
  } else {
    res.redirect("login");
  }
};

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var time=year+"/"+month+"/"+day;



NoticeManager.deleteNotice = function(req, res) {
  var noticeId = req.body.noticeId;
  models.Notice.destroy({
    where: {
      noticeId: noticeId
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


NoticeManager.settingHomePage = function(req, res) {
  var noticeId = req.body.noticeId;
  models.Notice.update({
    state: "首页",
    noticeTime:time
  }, {
    where: {
      noticeId: noticeId
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

NoticeManager.settingNewsPage = function(req, res) {
  var noticeId = req.body.noticeId;

  models.Notice.update({
    state: "公告页",
    noticeTime:time
  }, {
    where: {
      noticeId: noticeId
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

module.exports = NoticeManager;
