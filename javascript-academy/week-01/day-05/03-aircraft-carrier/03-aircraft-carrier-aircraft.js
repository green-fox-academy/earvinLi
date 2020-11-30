class Aircraft {
  constructor(type, maxAmmo, baseDamage) {
    this.type = type;
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
    this.ammoStorage = 0;
  }

  fight() {
    this.ammoStorage = 0;
    return this.baseDamage * this.ammoStorage;
  }

  refill(ammoToRefill) {
    if (ammoToRefill > this.maxAmmo) {
      const actualAmmoToRefill = this.maxAmmo;
      this.ammoStorage += actualAmmoToRefill;
      Aircraft.totalAmmo += ammoToRefill - actualAmmoToRefill;
    } else {
      this.ammoStorage += ammoToRefill;
    }
    return Aircraft.totalAmmo;
  }

  getType() {
    return this.type;
  }

  getStatus() {
    return `Type: ${this.type}, Ammo: ${this.ammoStorage}, Base Damage: ${this.baseDamage}, All Damage: ${this.ammoStorage * this.baseDamage}`;
  }

  isPriority() {
    return this.type === 'F35' ? true : false;
  }
}

Aircraft.totalAmmo = 0;

module.exports = Aircraft;
