const unsortedArray = [4, 2, 1, 3, 5, 7, 8, 6];

const bubbleSort = arr => {
  let isSorted = false;
  let lastUnsortedPos = arr.length - 1;

  while (!isSorted) {
    for (i = 0; i < lastUnsortedPos; i++) {
      isSorted = true;
      if (arr[i] > arr[i + 1]) {
        let tempEle = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tempEle;
        isSorted = false;
      }
    }

    lastUnsortedPos--;
  }

  return arr;
};

const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray);
