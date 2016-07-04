var Logout = {};

Logout.getLogout = function(req, res) {
  delete req.session;
  if(req.session){
    res.send({
      status:STATUS.DATA_SUCCESS
    });
  }
  else {

  }
  console.log(1);
};


module.exports = Logout;
