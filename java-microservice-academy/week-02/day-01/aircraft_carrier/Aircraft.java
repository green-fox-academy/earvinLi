package aircraft_carrier;

public class Aircraft {
  String type;
  int maxAmmo;
  int baseDamage;
  int ammoStorage;

  public  Aircraft(String type) {
    this.type = type;
    this.maxAmmo = type.equals("F16") ? 8 : 12;
    this.baseDamage = type.equals("F16") ? 30 : 50;
    this.ammoStorage = 0;
  }

  int fight() {
    int totalDamage = baseDamage * ammoStorage;
    this.ammoStorage = 0;
    return totalDamage;
  }

  int refill(int ammoToFill) {
    int actualAmmoToFill = this.maxAmmo - this.ammoStorage;
    boolean muchMoreAmmo = ammoToFill > actualAmmoToFill;

    this.ammoStorage = muchMoreAmmo ? this.maxAmmo : this.ammoStorage + ammoToFill;
    return muchMoreAmmo ? ammoToFill - actualAmmoToFill : ammoToFill;
  }

  String getType() {
    return this.type;
  }

  String getStatus() {
    return String.format(
        "Type %s, Ammo: %s, Base Damage: %s, All Damage: %s",
        this.type, this.ammoStorage, this.baseDamage, this.baseDamage * this.ammoStorage
        );
  }

  boolean isPriority() {
    return this.type.equals("F35");
  }
}
