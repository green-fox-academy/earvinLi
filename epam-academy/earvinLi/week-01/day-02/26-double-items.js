'use strict';

// - Create an array variable named `ag` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// - Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`
const ag = ['Gin', 'Whiskey', 'Wine', 'Beer'];

const newAg = ag.map(liquor => liquor.repeat(2));

console.log(newAg);
