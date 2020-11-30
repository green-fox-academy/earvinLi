'use strict';

const priceBook = new Map([
  ['Eggs', 200],
  ['Milk', 200],
  ['Fish', 400],
  ['Apples', 150],
  ['Bread', 50],
  ['Chicken', 550],
]);

// TODO: Not copy these but make it a function
const prodsPriceLowerTwoZeroOne = [];
for (let [key, value] of priceBook) {
  if (value < 201) prodsPriceLowerTwoZeroOne.push(key);
}

// TODO: Add 'and' properly
console.log(`Products cost less than 201 are: ${prodsPriceLowerTwoZeroOne.join(', ')}.`);

const prodsPriceOverOneFifty = [];
for (let [key, value] of priceBook) {
  if (value > 150) prodsPriceOverOneFifty.push(key);
}

// TODO: Add 'and' properly
console.log(`Products cost more than 150 are: ${prodsPriceOverOneFifty.join(', ')}.`);
