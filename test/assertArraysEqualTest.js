const assert = require('chai').assert;

const assertArraysEqual = require('../assertArraysEqual');

describe('#head', () => {
  it("return two arrays are the same for [] and []",() => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), "These two arrays are the same.");
  });

});





// assertArraysEqual([1, 2, 3], [1, 2, 3]); 