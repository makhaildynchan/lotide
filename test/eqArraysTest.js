/**
 * input 2 arrays and boolean
 * input function eqArrays
 * input function assertEqual
 * return boolean
 */
const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false);
assertEqual(eqArrays([1, 2, "3"], [1, 2, "3"]), true);
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, "3"]), false);
assertEqual(eqArrays([], []), true);