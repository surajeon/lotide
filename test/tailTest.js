const assert = require("chai").assert;
const tail = require("../tail");

// const words = ["Yo Yo", "Lighthouse", "Labs"];

describe('#head', () => {
  it("", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), "Lighthouse, Labs");
  });
});
