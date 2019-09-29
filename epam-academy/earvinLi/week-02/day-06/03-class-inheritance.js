const GardenES5 = require('./02-class');

function PlaygroundES5(width, length, toys) {
  GardenES5.call(this, width,length);
  this.toys = [];
}

PlaygroundES5.prototype = Object.create(GardenES5.prototype);
PlaygroundES5.prototype.constructor = PlaygroundES5;

PlaygroundES5.prototype.add = function(toy) {
  this.toys.push(toy);
};

const playgroundOne = new PlaygroundES5(4, 5);
console.log(playgroundOne.toys);
playgroundOne.add('A toy~');
console.log(playgroundOne.toys);
