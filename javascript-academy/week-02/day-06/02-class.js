// ES5
function GardenES5(width, length) {
  this.width = width;
  this.length = length;
}

GardenES5.prototype.area = function() {
  return this.width * this.length;
};

GardenES5.prototype.circumference = function() {
  return this.width * 2 + this.length * 2;
};

GardenES5.prototype.efficiency = function() {
  return this.area() / this.circumference();
};

var gardenOne = new GardenES5(4, 5);
console.log(gardenOne.efficiency());

// ES6
class GardenES6 {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  area() {
    return this.width * this.length;
  }

  circumference() {
    return this.width * 2 + this.length * 2;
  }

  efficiency() {
    return this.area() / this.circumference();
  }
}

const gardenTwo = new GardenES6(4, 5);
console.log(gardenTwo.efficiency());

module.exports = GardenES5;
