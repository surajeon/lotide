const eqObjects = require('./eqObjects');


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    return `Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    return `Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };

console.log(assertObjectsEqual(cd,dc));
console.log(assertObjectsEqual(cd2,dc));

module.exports = assertObjectsEqual;