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


const middle = function(array) {
  let middleArray = [];
    if (array.length % 2 === 0) {
      let i = array.length / 2;
      let y = i - 1;
      middleArray.push(array[y], array[i]);
    } else {
      let i = (array.length - 1) / 2;
      middleArray.push(array[i]);
    }
    return middleArray;
  }
console.log(middle([1,2,"hello",4,5,6]));


assertArraysEqual(middle([2,4,5]), [4]); //true
// TEST CODE
// ...

assertArraysEqual(middle([1]),[1]); // true
assertArraysEqual(middle([1,2]),[1]); // false
assertArraysEqual(middle([1,2,3]),[2]); // ture
assertArraysEqual(middle([1,2,3,4]),[2,3]); // true
assertArraysEqual(middle([1,2,3,4,5]),[3,4]); // false