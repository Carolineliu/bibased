var models = require("../../models");
var STATUS = require('../status.js');

var PersonalInfo = {};

PersonalInfo.getPersonalInfo = function(req, res) {
  var personalInfos = [];
  var adminName = req.session.adminName;
  if (adminName) {
    models.Admin.findAll({
      where: {
        adminName: adminName
      }
    }).then(function(data) {
      res.render("admin/personalInfo", {
        personalInfos: data[0].dataValues
      });
    });
  } else {
    res.redirect("login");
  }
};


module.exports = PersonalInfo;
