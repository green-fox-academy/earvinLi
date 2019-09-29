// ES5
var matrixES5 = function(row, col) {
  var others = Array.from(arguments).splice(2, arguments.length - 1);

  if (row * col > others.length) {
    return null;
  }

  var tempRow = '';

  others.forEach(function(ele, i) {
    tempRow += ele;

    if ((i + 1) % col === 0) {
      console.log(tempRow);
      tempRow = '';
    }
  });
};

// ES6
const matrixES6 = (row, col, ...others) => {
  if (row * col > others.length) {
    return null;
  }

  let tempRow = '';

  others.forEach((ele, i) => {
    tempRow += ele;

    if ((i + 1) % col === 0) {
      console.log(tempRow);
      tempRow = '';
    }
  });
};

matrixES5(3, 3, 1, 2, 3, 4, 5, 6, 7, 8, 9);
// matrixES5(3, 3, 1, 2, 3, 4);
