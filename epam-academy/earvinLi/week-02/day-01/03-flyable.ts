import { Animal } from './02-zoo/02-zoo-animals';

interface Flyable {
  land(): void;
  fly(): void;
  takeOff(): void;
}

abstract class Vehicle {
  gasType: string;
  numOfWheel: number;
  armed: boolean;

  constructor(gasType: string, numOfWheel: number, armed: boolean) {
    this.gasType = gasType;
    this.numOfWheel = numOfWheel;
    this.armed = armed;
  }
}

class Helicopter extends Vehicle implements Flyable {
  constructor(gasType: string = 'gasoline', numOfWheel: number = 0, armed: boolean = true) {
    super(gasType, numOfWheel, armed);
  }

  land(): void {
    console.log('Helicopter is landing!');
  };
  fly(): void {
    console.log('Helicopter is flying!');
  };
  takeOff(): void {
    console.log('Helicopter is taking off!');
  };
}

class Bird extends Animal implements Flyable {
  featherColor: string;
  migrant: boolean;

  constructor(name, featherColor: string = 'white', migrant: boolean = true) {
    super(name, 1, 4);
    this.featherColor = featherColor;
    this.migrant = migrant;
  }

  breed(): string {
    return 'laying eggs';
  }

  land(): void {
    console.log('Bird is landing!');
  };
  fly(): void {
    console.log('Bird is flying!');
  };
  takeOff(): void {
    console.log('Bird is taking off!');
  };
}

const helicopterOne = new Helicopter();
helicopterOne.land();

const parrot = new Bird('Parrot');
parrot.takeOff();
