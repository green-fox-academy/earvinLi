'use strict';

const lineCount = 7;



// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is
const drawDiamond = lines => {
  const halfLines = (lines + 1) / 2;
  for (let i = 1; i < halfLines; i++) console.log(`${' '.repeat(halfLines - i)}${'*'.repeat(i * 2 - 1)}`);
  console.log('*'.repeat(lines));
  for (let i = halfLines - 1; i > 0; i--) console.log(`${' '.repeat(halfLines - i)}${'*'.repeat(i * 2 - 1)}`);
};

drawDiamond(halfLines);
