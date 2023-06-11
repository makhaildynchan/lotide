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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    //compares two arrays passed as arguments
    console.log(`✅ Assertion Passed: [${array1}] is the same to [${array2}]`);
    return true;
  } else {
    console.log(`❌ Assertion Failed: [${array1}] is different to [${array2}]`);
    return false;
  }
};

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