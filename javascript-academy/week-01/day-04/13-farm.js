'use strict';

const Animal = require('./03-animal');

class Farm {
  constructor(slots) {
    this.animals = [];
    this.slots = slots;
  }

  add(animal) { this.animals.push(animal); }

  bread() {
    if (this.slots) this.add(new Animal());
  }

  slaughter() {
    // TODO: Better way to find the target
    const hungerAmounts = []
    this.animals.map(animal => hungerAmounts.push(animal.hunger));
    const lowestHungerAmount = Math.min(...hungerAmounts);

    this.animals.map((animal, index) => {
      if (animal.hunger === lowestHungerAmount) this.animals.splice(index, 1);
    });
  }
}

const farmOne = new Farm(100);
farmOne.add(new Animal());
farmOne.add(new Animal(49));

console.log(farmOne);

farmOne.bread();
console.log(farmOne);

farmOne.slaughter();
console.log(farmOne);
