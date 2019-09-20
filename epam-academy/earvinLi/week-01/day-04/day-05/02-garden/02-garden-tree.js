class Tree {
  constructor(color, waterAmount = 20) {
    this.color = color;
    this.waterAmount = waterAmount;
  }

  needWater() {
    return this.waterAmount < 10 ? true : false;
  }

  water(water) {
    return this.waterAmount += water * 0.4;
  }
}

module.exports = Tree;
