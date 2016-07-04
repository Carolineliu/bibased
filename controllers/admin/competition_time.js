var models = require("../../models");
var STATUS = require('../status.js');

var CompetitionTime = {};
var time = {};

CompetitionTime.getCompetitionTime = function(req, res) {
  if (req.session.adminName) {
    res.render("admin/competition_time", time);
  } else {
    res.redirect("login");
  }
};

CompetitionTime.setComepetitionTime = function(req, res) {
  var obj = req.body;

  if (req.session.timeId) {
    models.Time.update(obj, {
      where: {
        timeId: req.session.timeId
      }
    }).then(function(data) {
      if (data) {
        time=data.dataValues;
        req.session.timeId = data.dataValues.timeId;
        res.send({
          status: STATUS.DATA_SUCCESS,
          data: data.dataValues.timeId
        });
      } else {
        res.send({
          status: STATUS.INS_ERROR
        });
      }
    });
  } else {
    models.Time.create(obj).then(function(data) {
      if (data) {
        time=data.dataValues;
        req.session.timeId = data.dataValues.timeId;
        res.send({
          status: STATUS.DATA_SUCCESS,
          data: data.dataValues.timeId
        });
      } else {
        res.send({
          status: STATUS.INS_ERROR
        });
      }
    });
  }
};


module.exports = CompetitionTime;
