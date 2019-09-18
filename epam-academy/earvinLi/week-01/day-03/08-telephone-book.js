'use strict';

const telephoneBook = new Map([
  ['William A. Lathan', '405-709-1865'],
  ['John K. Miller', '402-247-8568'],
  ['Hortensia E. Foster', '606-481-6467'],
  ['Amanda D. Newland', '319-243-5613'],
  ['Brooke P. Askew', '307-687-2982'],
]);

console.log(`John K. Miller's phone number is ${telephoneBook.get('John K. Miller')}`);

// Find the key of a value of a map
// Idea from:
// https://stackoverflow.com/questions/47135661/how-to-get-a-key-in-a-javascript-map-by-its-value
const targetPerson = [...telephoneBook.entries()]
  .filter(({ 1: v }) => v === '307-687-2982')
  .map(([k]) => k);

  console.log(`307-687-2982 is ${targetPerson[0]}'s phone number.'`);

  console.log(`We ${!telephoneBook.has('Chris E. Myers') && 'don\'t'} know Chris E. Myers' phone number.`);
