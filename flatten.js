const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return console.log('false');
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false; s
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