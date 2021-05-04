const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

map(["g", "c", "t", "m", "t"], "a")

module.exports = map;



// console.log(assertArraysEqual(results1, ["g", "c", "t", "m", "t"]));
// console.log(assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]));
// console.log(assertArraysEqual(results1, ["g", "c", "t", "m"]));
