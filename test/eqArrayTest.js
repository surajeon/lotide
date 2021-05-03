const assert = require('chai').assert;


const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

describe('#head',() => {
  it("return false for false and true",() => {
    assert.strictEqual(assertEqual(eqArrays([1,2,4],[1,2,3]),true), `🛑🛑🛑 Assertion Failed: false !== true`);
  });

  it("return false for false and true",() => {
    assert.strictEqual(assertEqual(eqArrays([1,2,4],[1,2,3]),false), `✅✅✅ Assertion Passed: false === false`);
  });

  it("return false for false and true",() => {
    assert.strictEqual(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true), `✅✅✅ Assertion Passed: true === true`);
  });

});


// assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), false)
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)