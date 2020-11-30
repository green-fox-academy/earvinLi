const targetObj = {
  long: 76,
  short: 55,
  shortshort: 19,
  longlong: 1000,
};

// ES7
const findMaxCountES7 = (obj) => {
  let maxCount = 0;

  for (let key of Object.keys(obj)) {
    if (obj[key] > maxCount) {
      maxCount = obj[key];
    }
  }

  return maxCount;
}

console.log(findMaxCountES7(targetObj));

// ES8
const findMaxCountES8 = (obj) => Math.max(...Object.values(obj));

console.log(findMaxCountES8(targetObj));
