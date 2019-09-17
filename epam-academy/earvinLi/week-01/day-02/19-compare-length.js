'use strict';

// - Create a variable named `p1`
//   with the following content: `[1, 2, 3]`
// - Create a variable named `p2`
//   with the following content: `[4, 5]`
// - Log to the console if `p2` has more elements than `p1`
const p1 = [1, 2, 3];
const p2 = [4, 5];

console.log(`That p2 has more elements than p1 is ${p2.length > p1.length}.`);
console.log(`p2 has ${p2.length > p1.length ? 'more' : 'less'} elements than p1.`);
