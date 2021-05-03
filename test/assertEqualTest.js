const assert = require('chai').assert;

const assertEqual = require('../assertEqual');

describe('#head',() => {
  it(`return "assertion passed" with arguments for arguments "1" and "1"`,() => {
    assert.strictEqual(assertEqual("1", "1"), `✅✅✅ Assertion Passed: 1 === 1`);
  });

  it(`return "assertion failed" with arguments for arguments true and "true`,() => {
    assert.strictEqual(assertEqual(true, "true"), `🛑🛑🛑 Assertion Failed: true !== true`);
  });

});



  // assertEqual("1","1");
  