const assertEqual = function(actual, expected) {
  if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    } else if (actual !== expected) {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);
  

const findKeyByValue = function (object, value) {
  for (let key in object) { //search through object keys
    
    if (object[key] === value) {
      return key;
    } 
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);