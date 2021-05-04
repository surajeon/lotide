const assert = require('chai').assert;

const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

describe('#head',() => {
  it(`return "These two arrays are the same" for [1,2,3] and 2`, () => {
    assert.deepEqual(assertArraysEqual(middle([1,2,3]),[2]), "These two arrays are the same.");
  });

  it(`return "These two arrays are the same" for [1,2,3,4] and [2,3]`, () => {
    assert.deepEqual(assertArraysEqual(middle([1,2,3,4]),[2,3]), "These two arrays are the same.");
  });

  it(`return "These two arrays are NOT the same" for [1,2,3,4,5] and [2,3]`, () => {
    assert.deepEqual(assertArraysEqual(middle([1,2,3,4,5]),[2,3]), "These two arrays are NOT the same.");
  });

});

// assertArraysEqual(middle([1]),[1]); // true
// assertArraysEqual(middle([1,2]),[1]); // false
// assertArraysEqual(middle([1,2,3]),[2]); // ture
// assertArraysEqual(middle([1,2,3,4]),[2,3]); // true
// assertArraysEqual(middle([1,2,3,4,5]),[3,4]); // false