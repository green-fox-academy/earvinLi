// ES5
var uniqNumsES5 = function(arrOne, arrTwo) {
  var allWeHave = arrOne.concat(arrTwo);
  var uniqArr = [];

  for (ele of allWeHave) {
    if ((arrOne.indexOf(ele) !== -1 && arrTwo.indexOf(ele) === -1) || (arrOne.indexOf(ele) === -1 && arrTwo.indexOf(ele) !== -1)) {
      uniqArr.push(ele);
    }
  }

  return uniqArr;
};
console.log(uniqNumsES5([1, 2, 5], [1, 2, 3, 4]));

// ES6
const uniqNumsES6 = (arrOne, arrTwo) => {
  const allWeHave = arrOne.concat(arrTwo);
  const uniqArr = [];

  for (ele of allWeHave) {
    if ((arrOne.includes(ele) && !arrTwo.includes(ele)) || (!arrOne.includes(ele) && arrTwo.includes(ele))) {
      uniqArr.push(ele);
    }
  }

  return uniqArr;
};
console.log(uniqNumsES6([1, 2, 5], [1, 2, 3, 4]));
