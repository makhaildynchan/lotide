//takes in an array that contains elements including nested array of elements and returns a flattened version of the array.
const flatten = function(elements) {
  // console.log(elements);
  let flatArray = [];
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {
      flatArray = flatArray.concat(flatten(elements[i]));
    } else {
      flatArray.push(elements[i]);
    }
  }
  console.log(flatArray);
  return flatArray;
};
flatten([1, 2, [3, 4], 5, [6]]);

module.exports = flatten;