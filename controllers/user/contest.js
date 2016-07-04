var models = require("../../models");
var STATUS = require('../status.js');
var Unique = require('../unique.js');
var loginSuccess = require('./loginSuccess.js');

var Contest = {};
var pageData = [];


Contest.getContest = function(req, res) {

  var length;
  var contests = [];
  var year = [];
  var schools = [];
  var state = loginSuccess.getPage(req.session.info);

  models.Contest.findAll().then(function(data) {
    length = data.length;
    for (var i = 0; i < data.length; i++) {
      year.push(data[i].dataValues.year);
      schools.push(data[i].dataValues.schoolName);
      if (i < 8) {
        contests.push(data[i].dataValues);
      }
    }

    schools = Unique.unique(schools);
    year = Unique.unique(year);

  

    var obj = {
      year: year,
      contests: contests,
      schools: schools,
      length: length,
      state: state
    };
    res.render("fontStage/contest", obj);
  });
};


Contest.getPagination = function(req, res) {
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
    if (data.length > 0) {
      for (var i = 0; i < data.length; i++) {
        contests.push(data[i].dataValues);
      }
      res.send({
        data: contests
      });
    } else {
      res.send({
        status: STATUS.NOT_FOUND
      });
    }

  });
};


Contest.getTypes = function(req, res) {
  var data = req.body.data;
  var obj = data;
  var contests = [];

  if (data.schoolName === "全部") {
    obj = {
      year: data.year
    };
  }
  models.Contest.findAll({
    where: obj
  }).then(function(data) {
    if (data) {
      pageData = [];
      for (var i = 0; i < data.length; i++) {
        pageData.push(data[i].dataValues);
        if (i < 8) {
          contests.push(data[i].dataValues);
        }
      }
      res.send({
        status: STATUS.DATA_SUCCESS,
        data: contests,
        length:pageData.length
      });
    } else {
      res.send({
        status: STATUS.NOT_FOUND
      });
    }
  });
};

Contest.selectPagination = function(req, res) {
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

module.exports = Contest;
