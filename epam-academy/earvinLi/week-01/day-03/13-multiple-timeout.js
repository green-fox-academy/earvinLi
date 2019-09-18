
'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds
setTimeout(() => {
  console.log('apple');
}, 0);

setTimeout(() => {
  console.log('pear');
}, 1000);

setTimeout(() => {
  console.log('melon');
}, 3000);

setTimeout(() => {
  console.log('grapes');
}, 5000);
