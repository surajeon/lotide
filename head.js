let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ✅✅✅ ${actual} === ${expected}`)
  } else if (actual !== expected) {
    
    console.assert(false, `🛑🛑🛑 ${actual} !== ${expected}`);
  }
};

let head = function(elm) {
  return elm[0];
}

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
