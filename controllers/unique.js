var Unique = {};

Unique.unique = function(array) {
  var newarray = [];
  for (var i = 0; i < array.length; i++) {
    if (newarray.indexOf(array[i]) == -1) {
      newarray.push(array[i]);
    }
  }
  return newarray;
};

module.exports = Unique;
