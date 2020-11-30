'use strict';

const lineCount = 6;

// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is
const drawSquare = lines => {
  for (let i = 1; i <= lines; i++) {
    if (i === 1 || i === lines) {
      console.log('%'.repeat(lines));
      continue;
    }
    console.log(`%${' '.repeat(lines - 2)}%`);
  }
};
drawSquare(lineCount);
