var models = require("../../models");
var STATUS = require('../status.js');
var multer = require('../../controllers/multerUtil.js');
var xlsx = require("node-xlsx");
var fs = require('fs');
var path = require('path');

var Logging = {};

Logging.getLogging = function(req, res) {
  if (req.session.adminName) {
    res.render("admin/logging");
  } else {
    res.redirect("login");
  }
};

Logging.downloadPrelim = function(req, res) {
  var contest = [];
  var contests = [];
  models.Contest.findAll({
    where: {
      year: new Date().getFullYear()
    }
  }).then(function(data) {
    for (var i = 0; i < data.length; i++) {
      contest.push(data[i].dataValues);
    }
    var datas = [
      ["项目编号", "项目名称", "项目负责人", "指导老师", "初赛成绩"]
    ];
    for (var j = 0; j < contest.length; j++) {
      var contests = [];
      var temps = contest[j];
      contests.push(temps.contestId, temps.contestName, temps.leader, temps.tutor, temps.prelim);
      datas.push(contests);
    }
    var obj = {
      worksheets: [{
        name: "Sheet",
        data: datas
      }]
    };
    var files = xlsx.build(obj.worksheets);
    fs.writeFileSync("downloadModel/a.xlsx", files, "binary");
    res.send({
      status: STATUS.DATA_SUCCESS
    });

  });


};

Logging.uploadPrelim = function(req, res) {
  var list = xlsx.parse("studentWorks/" + req.file.filename);
  var data = list[0].data;
  for (var i = 1; i < data.length; i++) {
    var inputData = data[i];
    models.Contest.update({
      prelim: inputData[inputData.length - 1]
    }, {
      where: {
        contestId: inputData[0]
      }
    });
  }
};


Logging.downloadFinal = function(req, res) {

  var contest = [];
  var average = [];
  var contests = [];
  models.Contest.findAll({
    where: {
      year: new Date().getFullYear()
    }
  }).then(function(data) {
    for (var i = 0; i < data.length; i++) {
      average.push(data[i].dataValues.prelim);
    }
    average.sort(function(a, b) {
      return a > b ? -1 : 1;
    });
    var length = Math.floor(average.length * 0.4);
    var minScore = average[length];
    return models.Contest.findAll({
      where: {
        prelim: {
          gt: minScore
        },
        year: new Date().getFullYear()
      }
    });
  }).then(function(data) {
    for (var j = 0; j < data.length; j++) {
      contest.push(data[j].dataValues);
    }
    var datas = [
      ["项目编号", "项目名称", "项目负责人", "指导老师", "初赛成绩", "复赛成绩"]
    ];
    for (var h = 0; h < contest.length; h++) {
      var contests = [];
      var temps = contest[h];
      contests.push(temps.contestId, temps.contestName, temps.leader, temps.tutor, temps.prelim, temps.final);
      datas.push(contests);
    }
    var obj = {
      worksheets: [{
        name: "Sheet",
        data: datas
      }]
    };
    var files = xlsx.build(obj.worksheets);
    fs.writeFileSync("downloadModel/b.xlsx", files, "binary");
    res.send({
      status: STATUS.DATA_SUCCESS
    });
  });
};



Logging.uploadFinal = function(req, res) {
  var list = xlsx.parse("studentWorks/" + req.file.filename);
  var data = list[0].data;
  for (var i = 1; i < data.length; i++) {
    var inputData = data[i];
    models.Contest.update({
      final: inputData[inputData.length - 1]
    }, {
      where: {
        contestId: inputData[0]
      }
    });
  }

  models.Contest.findAll({
    where: {
      final: {
        gt: 0
      }
    }
  }).then(function(data) {
    for (var i = 0; i < data.length; i++) {
      var contestScore = data[i].prelim * 0.4 + data[i].final * 0.6;
      console.log(contestScore);
      models.Contest.update({
        contestScore: contestScore
      }, {
        where: {
          contestId: data[i].contestId
        }
      });
    }
  });
};

Logging.download = function(req, res) {
  // res.sendFile(path.resolve("downloadModel/a.xlsx"));
  // res.download("downloadModel/a.xlsx");
};

module.exports = Logging;
