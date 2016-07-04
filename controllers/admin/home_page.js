var models = require("../../models");
var STATUS = require('../status.js');

var HomePage = {};

HomePage.getHomePage = function(req, res) {
  var users;
  var contests;
  var schools;
  var winners;
  if (req.session.adminName) {
    models.User.findAll().then(function(data) {
      users = data.length;
      return models.Contest.findAll().then(function(data) {
        contests = data.length;
        return models.School.findAll().then(function(data) {
          schools = data.length;
          return models.New.findAll().then(function(data) {
            news = data.length;
            res.render("admin/home_page", {
              users: users,
              contests: contests,
              schools: schools,
              news: news
            });
          });
        });
      });
    });

  } else {
    res.redirect("login");
  }
};


module.exports = HomePage;
