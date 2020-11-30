abstract class Instrument {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract play(): void;
}

abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;

  constructor(name: string, numberOfStrings: number) {
    super(name);

    this.numberOfStrings = numberOfStrings;
  }

  abstract sound(): void;

  play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}.`);
  }
}

export class ElectricGuitar extends StringedInstrument {
  constructor(numberOfStrings: number = 6) {
    super('Electric Guitar', numberOfStrings);
    this.numberOfStrings = numberOfStrings;
  }

  sound(): string {
    return 'Twang';
  }
}

export class BassGuitar extends StringedInstrument {
  constructor(numberOfStrings: number = 4) {
    super('Bass Guitar', numberOfStrings);
    this.numberOfStrings = numberOfStrings;
  }

  sound(): string {
    return 'Duum-duum-duum';
  }
}

export class Violin extends StringedInstrument {
  constructor(numberOfStrings: number = 4) {
    super('Violin', numberOfStrings);
    this.numberOfStrings = numberOfStrings;
  }

  sound(): string {
    return 'Screech';
  }
}
