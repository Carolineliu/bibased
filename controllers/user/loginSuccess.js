var LoginSuccess = {};

LoginSuccess.getPage = function(session) {
  var state = 0;
  if (session) {
    state = 1;
  }
  return state;
};

module.exports = LoginSuccess;
