'use strict';

class Animal {
  constructor(hunger = 50, thirst = 50) {
    this.hunger = hunger;
    this.thirst = thirst;
  }

  eat() { this.hunger--; }
  drink() { this.thirst--; }
  play() {
    this.hunger++;
    this.thirst++;
  }
}

const animalOne = new Animal();

// console.log(animalOne.hunger);

animalOne.eat();

// console.log(animalOne.hunger);

animalOne.drink();
animalOne.play();

// console.log(animalOne);

module.exports = Animal;
