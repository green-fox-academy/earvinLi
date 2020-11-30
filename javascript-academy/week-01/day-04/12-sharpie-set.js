'use strict';

const Sharpie = require('./04-sharpie');

class SharpieSet {
  constructor() {
    this.sharpieSet = [];
    this.numOfUsable = 0;
  }

  add(sharpie) { this.sharpieSet.push(sharpie); }

  countUsable() {
    this.numOfUsable = 0;
    this.sharpieSet.map(sharpie => {
      if (sharpie.inkAmount > 0) this.numOfUsable += 1;
    });
    console.log(this.numOfUsable);
  }

  removeTrash() {
    this.sharpieSet.map((sharpie, index) => {
      if (sharpie.inkAmount === 0) this.sharpieSet.splice(index, 1);
    });
  }
}

const sharpieSetOne = new SharpieSet();
sharpieSetOne.add(new Sharpie('red', 1.5));
sharpieSetOne.add(new Sharpie('green', 1.5, 0));

sharpieSetOne.countUsable();
sharpieSetOne.removeTrash();

console.log(sharpieSetOne.sharpieSet);
