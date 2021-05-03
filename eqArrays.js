const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
      console.log(false);
      return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
};

module.exports = eqArrays;
// eqArrays([1, 2, 4], [1, 2, 3]) // => false
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
