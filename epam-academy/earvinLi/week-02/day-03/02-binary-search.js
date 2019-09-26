const sortedArray = [4, 2, 1, 3, 5, 7, 8, 6].sort();

const binarySearchRecursive = (arr, target, left, right) => {
  if (left > right) return false;

  // Round if we have an even number of elements
  const mid = Math.round((left + right) / 2);

  if (arr[mid] === target) {
    return true;
  }

  // left and right keeping changing is because of the recursion
  // mid goes to left or right when needed
  // because left or right comes from the UPPER calling
  else if (target < arr[mid])  {
    return binarySearchRecursive(arr, target, left, mid - 1);
  }

  else {
    return binarySearchRecursive(arr, target, mid + 1, right);
  }
};

const binarySearch = (arr, target) => binarySearchRecursive(arr, target, 0, arr.length - 1);

console.log(binarySearch(sortedArray, 7));
console.log(binarySearch(sortedArray, 27));
