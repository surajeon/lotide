const middle = function(array) {
  let middleArray = [];
    if (array.length % 2 === 0) {
      let i = array.length / 2;
      let y = i - 1;
      middleArray.push(array[y], array[i]);
    } else {
      let i = (array.length - 1) / 2;
      middleArray.push(array[i]);
    }
    return middleArray;
  }

module.exports = middle;