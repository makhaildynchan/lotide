//takes in an array and returns middle most element of the array.
const middle = function(array) {
  let arrayResult = [];
  if (array.length <= 2 && array.length > 0) {
    return arrayResult;
  } else if (array.length % 2 === 0) {
    return arrayResult = [array[(array.length / 2) - 1], array[array.length / 2]];
  } else {
    return arrayResult = array[(array.length - 1) / 2];
  }
};
console.log(middle([1, 2, 3, 4, 5, 6]));
module.exports = middle;