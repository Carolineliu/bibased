var models = require("../../models");
var STATUS = require('../status.js');
var nodemailer = require("nodemailer");
var loginSuccess = require('./loginSuccess.js');

var FindPassword = {};

FindPassword.getFindPassword = function(req, res) {
  var state = loginSuccess.getPage(req.session.info);
  res.render("fontStage/findPassword", {
    state: state
  });
};
FindPassword.findPassword = function(req, res) {
  var email = req.body.email;
  var passwords = Math.random().toString(36).substr(2);

  models.User.findOne({
    where: {
      email: email
    }
  }).then(function(data) {
    if (!data) {
      res.send({
        status: STATUS.NOT_FOUND
      });
    } else {
      models.User.update({
        password: passwords
      }, {
        where: {
          email: email
        }
      }).then(function(data) {
        if (data) {
          var user = "QQ邮箱";
          var password = "你自己的QQ密码";
          var smtpTransport = nodemailer.createTransport({
            service: "QQ",
            auth: {
              user: user,
              pass: password
            }
          });

          smtpTransport.sendMail({
            from: 'fruits<' + user + '>',
            to: '<fruitsugar1@outlook.com>',
            subject: '找回密码',
            html: '密码' + passwords + ' <br> ',
          }, function(err, t) {
            if (!err) {
              res.send({
                status: STATUS.DATA_SUCCESS
              });
            }
          });
        } else {
          res.send({
            status: STATUS.NOT_FOUND
          });
        }

      });
    }
  });

};

module.exports = FindPassword;
