'use strict';

// Find the key of a value of a map
// Idea from:
// https://stackoverflow.com/questions/47135661/how-to-get-a-key-in-a-javascript-map-by-its-value
const getKeyFromValue = (targetMap, targetValue) =>
  [...targetMap.entries()]
    .filter(({ 1: v }) => v === targetValue)
    .map(([k]) => k)[0];

const priceBook = new Map([
  ['Eggs', 200],
  ['Milk', 200],
  ['Fish', 400],
  ['Apples', 150],
  ['Bread', 50],
  ['Chicken', 550],
]);

console.log(`The price of fish is ${priceBook.get('Fish')}.`);


const mostExpensiveProduct = getKeyFromValue(priceBook, Math.max(...priceBook.values()));
console.log(`The most expensive product is ${mostExpensiveProduct}.`);


let totalPrice = 0;
for (let value of priceBook.values()) totalPrice += value;
console.log(`The average price is ${(totalPrice / priceBook.size).toFixed(2)}.`);


let numOfProdPriceOverThreeHundred = 0;
for (let value of priceBook.values()) {
  if (value < 300) numOfProdPriceOverThreeHundred += 1;
}
console.log(`There are ${numOfProdPriceOverThreeHundred} products whose prices are below 300.`);


const productOfPriceOneTwentyFive = getKeyFromValue(priceBook, 125);
console.log(productOfPriceOneTwentyFive ? 'There is something we can buy for exactly 125.' : 'There isn\'t anything we can buy for exactly 125.');


const cheapestProduct = getKeyFromValue(priceBook, Math.min(...priceBook.values()));
console.log(`The cheapest expensive product is ${cheapestProduct}.`);
