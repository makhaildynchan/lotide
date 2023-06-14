// takes in 2 arrays and returns true if the arrays are equal and false otherwise.
const assertEqual = require('./assertEqual');
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return console.log('false');
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false
eqArrays(["1", "2", "3"], ["1", "2", "3"]);
eqArrays(["1", "2", "3"], ["1", "2", 3]);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
module.exports = eqArrays;