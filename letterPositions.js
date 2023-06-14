const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      const item = sentence[i];
      if (!results[item]) {
        results[item] = [i];
      } else {
        results[item].push(i);
      }
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));
console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;