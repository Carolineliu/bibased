var loginSuccess = require('./loginSuccess.js');

var SubmitMessage = {};

SubmitMessage.getSubmitMessage=function(req,res){
    var state = loginSuccess.getPage(req.session.info);
 res.render("fontStage/submit_message",{
   state:state
 });
};


module.exports = SubmitMessage;
