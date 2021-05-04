const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) { // loop sentence
    if (sentence[i] && sentence[i] !== " "){ // if sentence exists & if sentence[i] = space
      if (!(results[sentence[i]])) { // if sentence 
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }     
    }
  }
  return results;
};


// console.log(letterPositions("lighthouse in the house"));

// assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;