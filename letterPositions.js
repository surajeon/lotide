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


const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) { // loop sentence
    if (sentence[i] && sentence[i] !== " "){ // if sentence exists & if sentence[i] = space
      if (!(results[sentence[i]])) { // if sentence 
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }     
    }
  }
  return results;
};


console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("hello").e, [1]);