let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ✅✅✅ ${actual} === ${expected}`)
  } else if (actual !== expected) {
    
    console.assert(false, `🛑🛑🛑 ${actual} !== ${expected}`);
  }
};



const tail = function (elms) {
  let arr = [];
  for (let i = 1; i < elms.length; i++) {
    arr.push(elms[i]);
  } 
  return arr.join(", ");
}


const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!