'use strict';

const currentHours = 14;
const currentMinutes = 34;
const currentSeconds = 42;
const currentSecondsInTotal = (14 * 60 + 34) * 60 + 42;
const secondsInADay = 24 * 60 * 60;

console.log(`The remaining seconds from today is ${secondsInADay - currentSecondsInTotal} seconds.`);
