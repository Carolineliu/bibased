var models = require("../../models");
var STATUS = require('../status.js');

var KindEditor = {};


KindEditor.getKindEditor = function(req, res) {

  if (req.url && req.url != "/") {
    var url = req.url;
    url = url.split("?")[1];
    var noticeId = url.split("=")[1];
    models.Notice.findOne({
      where: {
        noticeId: noticeId
      }
    }).then(function(data) {
      res.render("admin/kindeditor", {
        notice: data.dataValues
      });
    });
  } else {
    res.render("admin/kindeditor");
  }

};

KindEditor.uploadImage = function(req, res) {

};

KindEditor.releasePage = function(req, res) {
  var title = req.body.title;
  var type = req.body.type;
  var content = req.body.content;
  if (type == "公告") {
    if (content) {
      models.Notice.create({
        noticeTitle: title,
        noticeContent: content,
        state: "待发布"
      }).then(function(data) {
        if (data) {
          res.send({
            status: STATUS.DATA_SUCCESS
          });
        } else {
          res.send({
            status: STATUS.NOT_FOUND
          });
        }
      });
    } else {
      models.Notice.update({
        noticeTitle: title,
        noticeContent: content,
        state: "待发布"
      }, {
        where: {
          noticeId: req.body.noticeId
        }
      }).then(function(data) {
        if (data) {
          res.send({
            status: STATUS.DATA_SUCCESS
          });
        } else {
          res.send({
            status: STATUS.NOT_FOUND
          });
        }
      });
    }

  } else {
    models.New.create({
      newsTitle: title,
      newsContent: content,
      state: "待发布"
    }).then(function(data) {
      if (data) {
        res.send({
          status: STATUS.DATA_SUCCESS
        });
      } else {
        res.send({
          status: STATUS.NOT_FOUND
        });
      }
    });
  }

};



module.exports = KindEditor;
