var list = require('badwords-list');

function isBadWord(word, arr) {
  return arr.indexOf(word.toLowerCase()) > -1;
}

function isBowlderised(word) {
  return word.indexOf('**') > -1;
}

module.exports = function(str) {
  var level = 0;

  if (!str) {
    return level;
  }

  var input = str.toString().split(" ");

  for (var w in input) {
      if (isBadWord(input[w], list.array) || isBowlderised(input[w])) {
        level = level + 1;
      }
  }

  return level;
}
