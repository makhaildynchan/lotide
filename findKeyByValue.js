const assertEqual = require("./assertEqual");

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};
const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (object[key] === value) {
      console.log(`${key}`);
      return key;
    }
  }
  console.log("undefined");
  return undefined;
};

findKeyByValue(bestTVShowsByGenre, "The Wires");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
module.exports = findKeyByValue;