'use strict';

let a = 3;
a = 11;
console.log(a);

let b = 100;
b = 6;
console.log(b);

let c =44;
c = 88;
console.log(c);

let d = 125;
d = 125 / 5;
console.log(d);

let e = 8;
e = Math.pow(e, 3);
console.log(e);

const f1 = 123;
const f2 = 345;
console.log(`That f1 is bigger than f2 is ${f1 > f2}.`);
console.log(`f1 is ${f1 > f2 ? 'bigger' : 'smaller'} than f2.`);

const g1 = 350;
const g2 = 200;
console.log(`That double of g2 is bigger than g1 is ${g2 * 2 > g1}.`);
console.log(`Double of g2 is ${g2 * 2 > g1 ? 'bigger' : 'smaller'} than g1.`);

const h = 1357988018575474;
console.log(`That h has 11 as a divisor is ${h % 11 === 0}.`);

const i1 = 10;
const i2 = 3;
const compareResult = i1 > Math.pow(i2, 2) && i1 < Math.pow(i2, 3);
console.log(`That i1 is higher than i2 squared and smaller than i2 cubed is ${compareResult}.`);
console.log(`i1 is ${i1 > Math.pow(i2, 2) ? 'higher' : 'smaller'} than i2 squared ${compareResult ? 'and' : 'but'} ${i1 < Math.pow(i2, 3) ? 'smaller' : 'higher'} than i2 cubed.`);

const j = 1521;
console.log(`That j is dividable by 3 is ${j % 3 === 0}.`);
console.log(`That j is dividable by 5 is ${j % 5 === 0}.`);
console.log(`j is dividable by ${j % 3 === 0 ? 3 : 5}.`);

let k = 'Apple';
for (let i = 0; i < 4; i++) {
  k += 'Apple';
}
console.log(k);
