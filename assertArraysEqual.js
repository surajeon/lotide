const eqArrays = require('./eqArrays')

const assertArraysEqual = function (array1, array2) {
  // use if statement with eqArray function
  if (eqArrays(array1, array2)) {
    return "These two arrays are the same.";
  } else {
    return "These two arrays are NOT the same.";
  }
}

module.exports = assertArraysEqual;