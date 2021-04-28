const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const num1 = [1,2,3];
const num2 = [2,2,3];

const eqArrays = function(arr1, arr2) {
  //takes in 2 arrays and returns true of false
  for (let i of arr1) {
    for (let j of arr2) {
      if(arr1[i] !== arr2[i]) {
        console.log(arr[i]);
        return false;
      } 
    }
  }
  
};
