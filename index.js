var list = require('badwords-list');

module.exports = function(str) {
  var level = 0;

  if (!str) {
    return level;
  }

  var input = str.toString().split(" ");

  for (var w in input) {
      var i = list.array.indexOf(input[w].toLowerCase());
      if (i > -1) {
        level = level + 1;
      }
  }
  
  return level;
}
