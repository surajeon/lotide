const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};
const eqArrays = function(arr1, arr2) {
  
  //takes in 2 arrays and returns true of false
  for (let i = 0; i < arr1.length; i ++) {
    if (arr1[i] !== arr2[1])
  }

  return;
};

console.log(eqArrays(["a","b","c"],["e","f","g"]));