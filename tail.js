const tail = function (elms) {
  let arr = [];
  for (let i = 1; i < elms.length; i++) {
    arr.push(elms[i]);
  } 
  return arr.join(", ");
}

module.exports = tail;