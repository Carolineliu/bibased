var models = require("../../models");
var STATUS = require('../status.js');

var ViewList = {};

ViewList.getSemifinalList = function(req, res) {
  if (req.session.adminName) {
    var semifinalList = [];
    var average = [];
    var score;
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
      for (var j = 0; j < data.length; j++)
        semifinalList.push(data[j].dataValues);
      res.render("admin/viewlist", {
        semifinalList: semifinalList
      });
    });
  } else {
    res.redirect("login");
  }
};


ViewList.deleteSemifinalList = function(req, res) {


};



module.exports = ViewList;
