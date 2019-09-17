'use strict';

// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result
// Idea from:
// https://stackoverflow.com/questions/38566788/return-sum-of-all-arguments-passed-to-function
const sum = (...args) => [...args].reduce((a, b) => a + b, 0);

console.log(sum(1, 2, 98));
