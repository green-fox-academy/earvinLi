'use strict';

class Sharpie {
  constructor(color, width, inkAmount = 100.00) {
    this.color = color;
    this.width = width;
    this.inkAmount = inkAmount;
  }

  use() { this.inkAmount--; }
}

const sharpieOne = new Sharpie('black', 1.5);
sharpieOne.use();
// console.log(sharpieOne.inkAmount);

module.exports = Sharpie;
