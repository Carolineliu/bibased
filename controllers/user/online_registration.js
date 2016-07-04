var models = require("../../models");
var multer = require("../multerUtil.js");
var STATUS = require("../status.js");
var xlsx = require("node-xlsx");
var loginSuccess = require('./loginSuccess.js');
var OnlineRegistration = {};

OnlineRegistration.getOnlineRegistration = function(req, res) {
  var schools = [];
  var state = loginSuccess.getPage(req.session.info);

  models.School.findAll().then(function(data) {
    for (var i = 0; i < data.length; i++) {
      schools.push(data[i].dataValues);
    }
    res.render("fontStage/online_registration", {
      schools: schools,
      status: state,
      state: state
    });
  });
};

OnlineRegistration.submit = function(req, res) {
  if (req.session.info) {
    var data = req.body;
    models.Contest.create({
      contestName: data.contestName,
      isWin: "审核中",
      leader: data.leader,
      leaderTel: data.leaderTel,
      studentTel: data.studentTel,
      studentCount: data.studentCount,
      tutor: data.tutor,
      year: new Date().getFullYear(),
      schedule: "审核中",
      intro: data.intro,
      introduce: data.introduce,
      schoolName: data.schoolName
    }).then(function(data) {
      if (data) {
        req.session.contestId = data.dataValues.contestId;
        models.User.update({
          contestId: data.dataValues.contestId
        }, {
          where: {
            userName: req.session.info.userName
          }
        }).then(function(data) {
          if (data) {
            res.send({
              status: STATUS.DATA_SUCCESS,
              message: {},
              data: {}
            });

          } else {
            res.send({
              status: STATUS.PARAM_ERROR,
              message: {},
              data: {}
            });
          }

        });
      }
    });

  } else {
    res.send({
      message: "请登录后再进行报名"
    });
  }


};

OnlineRegistration.downloadModel = function(req, res) {
  var file = "downloadModel/报名模版.xlsx";
  res.download(file);
  console.log(file);
  res.download('downloadModel/', "报名模版.xlsx");
};

module.exports = OnlineRegistration;
