'use strict';

const massInKg = 81.2;
const heightInM = 1.78;

console.log(`The body mass index (BMI) is ${(massInKg / Math.pow(heightInM, 2)).toFixed(2)}.`);
