var models = require("../../models");
var STATUS = require('../status.js');
var loginSuccess = require('./loginSuccess.js');

var Notice = {};

Notice.getNotice = function(req, res) {
  var notice = [];
  var state = loginSuccess.getPage(req.session.info);

  models.Notice.findAll({
    where:{
      state:"公告页"
    }
  }).then(function(data) {
    for (var i = 0; i < data.length; i++) {
      notice.push(data[i].dataValues);
    }
  });

  res.render("fontStage/notice", {
    notice: notice,
    state: state
  });
};





module.exports = Notice;
