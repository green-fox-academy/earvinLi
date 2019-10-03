const getAverage = (arr) => {
  const arrLength = arr.length;
  let sum = 0;
  arr.forEach((ele) => sum += ele);
  return (sum / arrLength).toFixed(2);
};

console.log(getAverage([1, 2, 3, 100, 939, 780]));
