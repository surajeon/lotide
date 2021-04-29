const assertEqual = function(actual, expected) {
  if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    } else if (actual !== expected) {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };

const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
      console.log(false);
      return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
};

  const eqObjects = function (obj1, obj2) {
    // key: value in an object matches with the other object's key: value;
    if (Object.keys(obj1).length !== Object.keys(obj2).length){
      return false; 
    } 
    for (let i of Object.keys(obj1)){
      if (Array.isArray(obj1[i])) {
        if (!eqArrays(obj1[i], obj2[i])) {
          return false;
        } 
      }
    }

    return true;
  }


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
