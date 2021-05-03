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
