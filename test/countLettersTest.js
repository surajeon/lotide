const assert = require('chai').assert;

const countLetters = require('../countLetters');

describe('#head', () => {
  it('return count of each letter in the given string.', () => {
    assert.deepEqual(countLetters('lighthouse labs'),`{ l: 2, i: 1, g: 1, h: 2, t: 1, o: 1, u: 1, s: 2, e: 1, a: 1, b: 1 }`);
  });
});