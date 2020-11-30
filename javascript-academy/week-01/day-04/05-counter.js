'use strict';

class Counter {
  constructor(currentCount = 0) {
    this.currentCount = currentCount;
  }

  add(num) { this.currentCount += num; }

  get current() {
    return this.currentCount;
  }

  reset() { this.currentCount = 0; }
}

const counterOne = new Counter;
console.log(counterOne.current);

counterOne.add(100);
console.log(counterOne.current);

counterOne.reset();
console.log(counterOne.current);
