const Plant = require('./02-garden-plant.js')

class Flower extends Plant {
  constructor(color, waterAmount, waterThreshold, waterAbsorbRate) {
    super(color, waterAmount, 5, 0.75);
  }
}

module.exports = Flower;
