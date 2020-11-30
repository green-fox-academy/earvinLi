'use strict';

// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array
const diagonalMatrix = lines => {
  let targetMatrix = [];

  for (let i = 0; i < lines; i++) {
    let tempLine = [];

    for (let j = 0; j < lines; j++) {
      if (j === lines - i - 1) {
        tempLine.push(1);
      } else {
        tempLine.push(0);
      }
    }

    targetMatrix.push(tempLine);
  }
  return targetMatrix;
}

diagonalMatrix(6).forEach(line => console.log(line.join(' ')));
