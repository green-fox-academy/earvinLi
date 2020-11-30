'use strict';

class Pirate {
  constructor() {
    this.intoxicated = false;
  }

  drintkSomeRum() {
    return this.intoxicated = true;
  }

  howItGoingMate() {
    if (this.intoxicated) {
      const repeatTimes = Math.floor(Math.random() * 5);
      for (let i = 0; i < repeatTimes; i++) console.log('Pour me anudder!');
    } else {
      return console.log('Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?');
    }
  }

  die() {}

  brawl() {}
}

const pirateOne = new Pirate();
// pirateOne.howItGoingMate();
pirateOne.drintkSomeRum();
pirateOne.howItGoingMate();
