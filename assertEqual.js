//a function that takes in 2 values and returns true if they are equal and false otherwise.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else (console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

module.exports = assertEqual;