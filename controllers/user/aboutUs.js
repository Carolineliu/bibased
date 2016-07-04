var loginSuccess = require('./loginSuccess.js');
var AboutUs = {};

AboutUs.getAboutUs=function(req,res){
  var state=loginSuccess.getPage(req.session.info);

 res.render("fontStage/aboutUs",{
   state:state
 });
};


module.exports = AboutUs;
