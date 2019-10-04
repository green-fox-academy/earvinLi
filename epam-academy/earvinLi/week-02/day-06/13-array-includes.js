// ES6
var uniqNumsES5 = (arrOne, arrTwo) => {
  const allWeHave = arrOne.concat(arrTwo);
  const uniqArr = [];

  for (let ele of allWeHave) {
    if ((arrOne.indexOf(ele) !== -1 && arrTwo.indexOf(ele) === -1) || (arrOne.indexOf(ele) === -1 && arrTwo.indexOf(ele) !== -1)) {
      uniqArr.push(ele);
    }
  }

  return uniqArr;
};
console.log(uniqNumsES5([1, 2, 5], [1, 2, 3, 4]));

// ES6
const uniqNumsES7 = (arrOne, arrTwo) => {
  const allWeHave = arrOne.concat(arrTwo);
  const uniqArr = [];

  for (let ele of allWeHave) {
    if ((arrOne.includes(ele) && !arrTwo.includes(ele)) || (!arrOne.includes(ele) && arrTwo.includes(ele))) {
      uniqArr.push(ele);
    }
  }

  return uniqArr;
};
console.log(uniqNumsES7([1, 2, 5], [1, 2, 3, 4]));
