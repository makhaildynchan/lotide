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

const without = function(sourceArray, itemToRemoveArray) {
  let newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    if (!itemToRemoveArray.includes(sourceArray[i])) {
      newArray.push(sourceArray[i]);
    }
  }
  return newArray;
};

const words = ["hello", "world", "lighthoused"];
let output = without(words, ["lighthouse"]); // => [2, 3]
console.log(output);

assertArraysEqual(words, ["hello", "world", "lighthouse"]);
