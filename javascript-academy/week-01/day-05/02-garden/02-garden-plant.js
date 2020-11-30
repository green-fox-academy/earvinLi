class Plant {
  constructor(color, waterAmount = 0, waterThreshold, waterAbsorbRate) {
    this.color = color;
    this.waterAmount = waterAmount;
    this.waterThreshold = waterThreshold;
    this.waterAbsorbRate = waterAbsorbRate;
  }

  needWater() {
    return this.waterAmount < this. waterThreshold;
  }

  water(amountToWater) {
    return this.waterAmount += amountToWater * this.waterAbsorbRate;
  }

  getStatus() {
    console.log(`The ${this.color} ${constructor.name} ${this.needWater() ? 'needs' : 'doesn\'t need'} water.`);
  }
}

module.exports = Plant;
