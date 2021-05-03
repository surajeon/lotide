const eqArrays = require('./eqArrays')

const assertArraysEqual = function (array1, array2) {
  // use if statement with eqArray function
  if (eqArrays(array1, array2)) {
    console.log("These two arrays are the same.")
  } else {
    console.log("These two arrays are not the same.");
  }
}

module.exports = assertArraysEqual;