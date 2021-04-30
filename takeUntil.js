const takeUntil = (array,callback) => {
  let result = [];
  for (const item of array) {
    if (callback(item)) {
      return result;
    } else {
      result.push(item)
    }
  }
}

//another way

// const takeUntil = function(array, callback) {
//   const newArray = [];
//   for (const i in array) {
//     if (!(callback(array[i]))) {
//       newArray.push(array[i]);
//     } else {
//       return newArray; 
//     }
//   }
// };



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


