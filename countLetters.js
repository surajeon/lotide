const assertEqual = function(actual, expected) {
  if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    } else if (actual !== expected) {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);
  
  const countLetters = function (sentence) {
    let result = {};
    let noSpaceSentence = sentence.replace(/ /g, '');
    console.log(noSpaceSentence);
    for (let letter of noSpaceSentence) {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      } 
    }
    return result;
  }

  console.log(countLetters('lighthouse labs'));