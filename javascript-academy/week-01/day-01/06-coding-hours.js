'use strict';

const dailyHours = 6;
const semesterLength = 17;

console.log(`An attendee codes ${dailyHours * 5 * semesterLength} hours a semester.`);
console.log(`An attendee codes ${(dailyHours * 5 / 52).toFixed(4) * 100}% less if the average work hours weekly is 52.`);
