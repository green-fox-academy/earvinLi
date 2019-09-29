// Idea from:
// https://www.youtube.com/watch?v=o1V9J3QR1ZQ

const unsortedArray = [38, 27, 43, 3, 9, 82, 10];

const mergeSort = arr => {
  if (arr.length < 2) return arr[1];

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);

  // merge() is fully invoked when we don't have any mergeSort() to do
  // but the upper merge()s are waiting to be invoked
  // because they're in the STACK
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const result = [];

  while(left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    return result.push(left.shift());
  }

  while (right.length) {
    return result.push(right.shift());
  }

  return result;
}

mergeSort(unsortedArray);
