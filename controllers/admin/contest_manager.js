var models = require("../../models");
var STATUS = require('../status.js');
var Unique = require("../unique.js");

var ContestManager = {};
var pageData = [];

ContestManager.getContestManager = function(req, res) {

  if (req.session.adminName) {
    var length;
    var contests = [];
    var year = [];
    var schools = [];

    models.Contest.findAll().then(function(data) {
      length = data.length;
      for (var i = 0; i < data.length; i++) {
        year.push(data[i].dataValues.year);
      }
      year = Unique.unique(year);
      return models.School.findAll();
    }).then(function(data) {
      for (var i = 0; i < data.length; i++) {
        schools.push(data[i].dataValues);
      }
      var obj = {
        year: year,
        schools: schools,
        length: length
      };
      res.render("admin/contest_manager", obj);
    });
  } else {
    res.redirect("login");
  }
};

ContestManager.getChangePage = function(req, res) {
  var school = req.body.data.school;
  var year = req.body.data.year;
  pageData = [];
  var contests = [];
  var obj;
  if (school === "全部") {
    obj = {
      year: year
    };
  } else {
    obj = {
      schoolName: school,
      year: year
    };
  }
  models.Contest.findAll({
    where: obj
  }).then(function(data) {
    if (data.length) {
      for (var i = 0; i < data.length; i++) {
        pageData.push(data[i].dataValues);
        if (i < 8) {
          contests.push(data[i].dataValues);
        }
      }
      res.send({
        data: contests,
        length: pageData.length
      });
    } else {
      res.send({
        status: STATUS.NOT_FOUND,
        data: {}
      });
    }
  });
};

ContestManager.getSelectPagination = function(req, res) {
  var index = req.body.data * 8;
  var contests = [];
  if (pageData) {
    for (var i = index; i < index + 8; i++) {
      if (pageData[i]) {
        contests.push(pageData[i]);
      }
    }
    res.send({
      data: contests
    });
  } else {
    res.send({
      status: STATUS.NOT_FOUND,
      data: {}
    });
  }
};

ContestManager.getPagination = function(req, res) {
  var contests = [];
  var data = req.body.data * 8;
  models.Contest.findAll({
    where: {
      $and: [{
        contestId: {
          gt: data
        }
      }, {
        contestId: {
          lt: data + 9
        }
      }]
    }
  }).then(function(data) {
    for (var i = 0; i < data.length; i++) {
      contests.push(data[i].dataValues);
    }
    res.send({
      data: contests
    });
  });
};



module.exports = ContestManager;
