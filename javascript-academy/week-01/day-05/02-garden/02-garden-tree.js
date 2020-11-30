const Plant = require('./02-garden-plant.js')

class Tree extends Plant {
  constructor(color, waterAmount, waterThreshold, waterAbsorbRate) {
    super(color, waterAmount, 10, 0.4);
  }
}

module.exports = Tree;
