
const findKey = (object, callback) => {
  for (const starName in object) {
    if(callback(object[starName])) {
      return starName;
    }
  }
};
  

// const moons = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// };

// console.log(findKey(moons, x => x.stars === 3));

module.exports = findKey;













