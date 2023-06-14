//takes in an array and returns tail elements except the first element of the array.
const tail = function(arr) {
  return arr.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));

module.exports = tail;