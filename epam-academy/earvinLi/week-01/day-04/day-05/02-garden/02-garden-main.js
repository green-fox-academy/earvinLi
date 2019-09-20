'use strict';

const FLower = require('./02-garden-flower');
const Tree = require('./02-garden-tree');

class Garden {
  constructor() {
    this.flowers = [];
    this.trees = [];
    this.needWaters = [];
  }

  addFlower(flower) {
    return this.flowers.push(flower);
  }

  addTree(tree) {
    return this.trees.push(tree);
  }

  water(water) {
    this.flowers.map(flower => {
      if (flower.needWater) this.needWaters.push(flower);
    });

    this.trees.map(tree => {
      if (tree.needWater) this.needWaters.push(tree);
    });

    console.log(`Watering with ${water}`);
    const amountToWater = water / this.needWaters.length;
    // TODO: Just call water() on the needWaters array
    // this.needWaters.water(water / this.needWaters.length);
    this.needWaters.map(needWater => needWater.water(amountToWater));
  }

  garden() {
    this.flowers.map(flower => console.log(`The ${flower.color} Flower ${flower.needWater() ? 'needs' : 'doesn\'t need'} water.`));

    this.trees.map(tree => console.log(`The ${tree.color} Tree ${tree.needWater() ? 'needs' : 'doesn\'t need'} water.`));
  }
}

const gardenOne = new Garden();
gardenOne.addFlower(new FLower('yellow', 4));
gardenOne.addFlower(new FLower('blue', 1));
gardenOne.addTree(new Tree('purple', 5));
gardenOne.addTree(new Tree('orange', 3));

gardenOne.garden();
console.log('\n');

gardenOne.water(40);
gardenOne.garden();
console.log('\n');

gardenOne.water(70);
gardenOne.garden();
console.log('\n');
