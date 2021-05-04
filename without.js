const without = function (source, itemToRemove) {
  // define an empty array
  const result = [];
  // loop source to see if they match
  for (let num of source) {
    if (!itemToRemove.includes(num)) {
      // if not matching, push to result
      result.push(num);
    }
  }
  return result;
}

console.log(without([1, 2, 3], [1])); // 2,3

// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"])); 

module.exports = without;