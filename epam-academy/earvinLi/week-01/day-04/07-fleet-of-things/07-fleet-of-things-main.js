'use strict';

const Thing = require('./07-fleet-of-things-thing');
const Fleet = require('./07-fleet-of-things-fleet');

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well
const things = ['Get milk', 'Remove the obstacles', 'Stand up', 'Eat lunch'];

class FleetOfThings {
  constructor() { this.fleetOfThings; }

  main() {
    const fleetOne = new Fleet();

    things.map((thing, index) => {
      let tempThing = new Thing(thing);

      if (index < 2) tempThing.complete();

      fleetOne.add(tempThing);
    });

    this.fleetOfThings = fleetOne.getThings();
  }

  print() {
    this.fleetOfThings.map((t, i) => {
      console.log(`${i}. [${t.completed === true ? ' ' : 'x'}] ${t.name}`);
    });
  }
}

const fleetOfThingsOne = new FleetOfThings();
fleetOfThingsOne.main();
fleetOfThingsOne.print();
