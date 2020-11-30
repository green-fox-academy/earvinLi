'use strict';

class Station {
  constructor(gasAmount) { this.gasAmount = gasAmount };

  refill(car) {
    this.gasAmount -= car.capacity;
    car.gasAmount += car.capacity;
  }
}

class Car {
  constructor(gasAmount = 0, capacity = 100) {
    this.gasAmount = gasAmount;
    this.capacity = capacity;
  };
}

const stationOne = new Station(10000);
const carOne = new Car();

stationOne.refill(carOne);
console.log(stationOne.gasAmount);
console.log(carOne.gasAmount);
