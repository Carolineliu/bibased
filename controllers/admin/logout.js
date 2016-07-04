var STATUS = require('../status.js');

var Logout = {};

Logout.getLogout = function(req, res) {
  delete req.session;
  if (!req.session) {
    res.send({
      status: STATUS.DATA_SUCCESS
    });
  } else {
    res.send({
      status: STATUS.DATA.SERVER_ERROR
    });
  }
};


module.exports = Logout;
