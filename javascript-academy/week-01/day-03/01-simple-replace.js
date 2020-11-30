'use strict';

var example = "In a dishwasher far far away";

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away
example = example.replace('dishwasher', 'galaxy');

console.log(example)

const person = {
  name: 'Earvin',
  age: 27,
};

const { name: something, age } = person;

console.log(something);
