'use strict';

const products = new Map([
  ['Milk', 1.07],
  ['Rice', 1.59],
  ['Eggs', 3.14],
  ['Cheese', 12.60],
  ['Chicken Breasts', 9.40],
  ['Apples', 2.31],
  ['Tomato', 2.58],
  ['Potato', 1.75],
  ['Onion', 1.10],
]);

const bobsShoppingList = new Map([
  ['Milk', 3],
  ['Rice', 2],
  ['Eggs', 2],
  ['Cheese', 1],
  ['Chicken Breasts', 4],
  ['Apples', 1],
  ['Tomato', 2],
  ['Potato', 1],
]);

const alicesShoppingList = new Map([
  ['Rice', 1],
  ['Eggs', 5],
  ['Chicken Breasts',2],
  ['Apples', 1],
  ['Tomato', 10],
]);

let bobPaid = 0;
let bobItemNum = 0;
for (let [key, value] of bobsShoppingList) {
  bobPaid += products.get(key) * value;
  bobItemNum += value;
}
console.log(`Bob paid ${bobPaid}.`);


let alicePaid = 0;
let aliceItemNum = 0;
for (let [key, value] of alicesShoppingList) {
  alicePaid += products.get(key) * value;
  aliceItemNum += value;
}
console.log(`Bob paid ${alicePaid}.`);


console.log(`${bobsShoppingList.get('Rice') > alicesShoppingList.get('Rice') ? 'Bod' : 'Alice'} bought more rice.`);


console.log(`${bobsShoppingList.get('Potato') > alicesShoppingList.get('Potato') ? 'Bod' : 'Alice'} bought more potato.`);


console.log(`${bobsShoppingList.size > alicesShoppingList.size ? 'Bod' : 'Alice'} bought more different products.`);

console.log(`${bobItemNum > aliceItemNum ? 'Bod' : 'Alice'} bought more pieces of products.`);
