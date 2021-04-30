const eqArrays = function(actual, expected) {
  // checking if length of the arrays are the same
  if (actual.length !== expected.length) {
      console.log(false);
      return false;
  }
  // loop to match each values on each index are the same
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      // if not matching print false
      console.log("result:", false);
      return false
    }
  }
  // if they match, print true
  console.log("result:", true);
  return true
};

const assertArraysEqual = function (array1, array2) {
  // use if statement with eqArray function
  if (eqArrays(array1, array2)) {
    console.log("These two arrays are the same.")
  } else {
    console.log("These two arrays are not the same.");
  }
}


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const results1 = map(words, word => word[0]);

console.log(assertArraysEqual(results1, ["g", "c", "t", "m", "t"]));
console.log(assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]));
console.log(assertArraysEqual(results1, ["g", "c", "t", "m"]));
