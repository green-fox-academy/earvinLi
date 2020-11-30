class Garden {
  constructor() {
    this.plants = [];
  }

  addPlant(plant) {
    return this.plants.push(plant);
  }

  water(totalAmountToWater) {
    const needWaters = this.plants.filter(plant => plant.needWater());

    console.log(`Watering with ${totalAmountToWater}`);
    const eachAmountToWater = totalAmountToWater / needWaters.length;
    
    return needWaters.map(needWater => needWater.water(eachAmountToWater));
  }

  getStatus() {
    return this.plants.map(plant => plant.getStatus());
  }
}

module.exports = Garden;
