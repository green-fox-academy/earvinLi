class Carrier {
  constructor(ammoStorage = 300, health = 5000) {
    this.aircrafts = [];
    this.ammoStorage = ammoStorage;
    this.health = health;
  }

  addAircraft(aircraft) {
    return this.aircrafts.push(aircraft);
  }

  fill() {
    const aircraftsWithPriority = this.aircrafts.reduce((acc, ele) => {
      if (ele.isPriority) return [ele, ...acc];
      return [...acc, ele];
    }, []);

    aircraftsWithPriority.map(aircraft => {
      // 'this' still points to Carrier even though its inside the map
      let { ammoStorage } = this;
      const { maxAmmo: ammoToFill } = aircraft;

      if (!ammoStorage) throw 'We have no ammo left.';
      if (ammoStorage < ammoToFill) throw 'We don\' have enough ammo to fill this aircraft.'

      aircraft.refill(ammoToFill);
      ammoStorage -= ammoToFill;
    });
  }

  totalDamage() {
    let totalDamage = 0;

    this.aircrafts.map(aircraft => totalDamage += aircraft.maxAmmo * aircraft.baseDamage);

    return totalDamage;
  }

  fight(carrier) {
    const totalDamage = this.totalDamage();

    if (carrier.health - totalDamage > 0) {
      return carrier.health - totalDamage;
    } else {
      return 'It\'s dead Jim :(';
    }
  }

  getStatus() {
    return `------------------------------------------------------------------\nHP: ${this.health}, Aircraft Count: ${this.aircrafts.length}, Ammo Storage: ${this.ammoStorage}, Total Damage: ${this.totalDamage()}\nAircrafts:\n${this.aircrafts.map(aircraft => aircraft.getStatus() + '\n').join('')}------------------------------------------------------------------`
  }
}

module.exports = Carrier;
