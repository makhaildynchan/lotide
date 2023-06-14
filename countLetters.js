//a function that takes in a sentence and returns a count of each of the letters in the sentence.
const countLetters = function(words) {
  const results = {};
  for (const letter of words) {
    //each letter in the allItems array
    if (letter !== " ") {
      if (results[letter] === undefined) {
        results[letter] = 1;
      } else {
        results[letter] += 1;
      }
    }
  }
  console.log(results);
  return results;
};

countLetters('kedss');
module.exports = countLetters;