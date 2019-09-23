class FLower {
  constructor(color, waterAmount = 20) {
    this.color = color;
    this.waterAmount = waterAmount;
  }

  needWater() {
    return this.waterAmount < 5 ? true : false;
  }

  water(water) {
    return this.waterAmount += water * 0.75;
  }


}

module.exports = FLower;
