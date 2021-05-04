const assert = require('chai').assert;

const assertObjectsEqual = require('../assertObjectsEqual');

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };

// const cd2 = { c: "1", d: ["2", 3, 4] };

describe('#head', () => {
  it("Return false when two objects are NOT the same", () => {
    assert.strictEqual(assertObjectsEqual({ c: "1", d: ["2", 3, 4] },{ d: ["2", 3], c: "1" }), `Assertion Failed: { c: '1', d: [ '2', 3, 4 ] } !== { d: [ '2', 3 ], c: '1' }`);
  });
});