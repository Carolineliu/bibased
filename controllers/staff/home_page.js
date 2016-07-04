var models = require("../../models");
var STATUS = require('../status.js');

var HomePage = {};

HomePage.getHomePage = function(req, res) {
  res.render("staff/home_page");
};


module.exports = HomePage;
