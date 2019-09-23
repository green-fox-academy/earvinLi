export abstract class Animal {
  name: string;
  age: number;
  numOfFeet: number;

  constructor(name: string, age: number, numOfFeet: number = 2) {
    this.name = name;
    this.age = age;
    this.numOfFeet = numOfFeet;
  }

  getName(): string {
    return this.name;
  }

  breed(): void {}
}

export class Mammal extends Animal {
  furColor: string;
  hasLanguageSkills: boolean;

  constructor(name, furColor: string = 'black', hasLanguageSkills: boolean = false) {
    super(name, 1, 4);
    this.furColor = furColor;
    this.hasLanguageSkills = hasLanguageSkills;
  }

  breed(): string {
    return 'pushing miniature versions out'
  }
}

export class Reptile extends Animal {
  hasShell: boolean;

  constructor(name, hasShell: boolean = true) {
    super(name, 1, 4);
    this.hasShell = hasShell;
  }

  breed(): string {
    return 'laying eggs';
  }
}

export class Bird extends Animal {
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
}
