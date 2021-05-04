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

  // console.log(countLetters('lighthouse labs'));

  module.exports = countLetters;