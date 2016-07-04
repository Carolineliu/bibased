var models = require("../../models");
var STATUS = require('../status.js');

var JudgeManager = {};

JudgeManager.getJudgeManager = function(req, res) {
  var judges = [];
  var schools = [];
  models.Judge.findAll().then(function(data) {
    for (var i = 0; i < data.length; i++) {
      judges.push(data[i].dataValues);
    }
    res.render("admin/judge_manager", {
      judges: judges
    });
  });

};

JudgeManager.addJudges = function(req, res) {
  var judgeId = req.body.judgeId;
  var judgeName = req.body.judgeName;
  var trueName = req.body.trueName;
  var judgePassword = req.body.judgePassword;
  var school = req.body.schol;
  var profession = req.body.profession;

  models.Judge.create({
    judgeId: judgeId,
    judgeName: judgeName,
    trueName: trueName,
    judgePassword: judgePassword,
    profession: profession,
    schoolId: 1
  }).then(function(data) {
    if (data.dataValues) {
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


JudgeManager.deleteJudge = function(req, res) {
  var judgeId = req.body.judgeId;

  res.send({
    data: {},
    status: {}
  });

};



module.exports = JudgeManager;
