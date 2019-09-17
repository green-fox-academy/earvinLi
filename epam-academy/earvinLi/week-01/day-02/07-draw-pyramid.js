
'use strict';

const lineCount = 4;

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
const drawPyramid = lines => {
  for (let i = 1; i <= lines; i++) console.log(`${' '.repeat(lines - i)}${'*'.repeat(i * 2 - 1)}`);
};

drawPyramid(lineCount);
