var vm = require('../');

var resultForNull = vm();
var resultForEmptyString = vm("");
var resultForInt = vm(1234);
var resultForSingleGoodWord = vm("foo");
var resultForMultipleGoodWords = vm("foo bar baz");
var resultForSingleBadWord = vm("fuck");
var resultForMultipleBadWords = vm("fuck shit piss");

console.log("Null: " + resultForNull);
console.log("Empty string: " + resultForEmptyString);
console.log("Int: " + resultForInt);
console.log("Single good word: " + resultForSingleGoodWord);
console.log("Multiple good words: " + resultForMultipleGoodWords);
console.log("Single bad word: " + resultForSingleBadWord);
console.log("Multiple bad words: " + resultForMultipleBadWords);
