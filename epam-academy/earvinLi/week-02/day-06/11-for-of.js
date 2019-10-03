const data = [5,1,2,9,7,3,8];

//ES5
var findMaxFromArrES5 = function(arr) {
  var maxNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
};
console.log(findMaxFromArrES5(data));

// ES6
const findMaxFromArrES6 = (arr) => {
  let maxNum = 0;
  for (let ele of arr) {
    if (ele >= maxNum) {
      maxNum = ele;
    }
  }
  return maxNum;
};
console.log(findMaxFromArrES6(data));
