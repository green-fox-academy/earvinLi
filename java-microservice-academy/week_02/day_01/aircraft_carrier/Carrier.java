package week_02.day_01.aircraft_carrier;

import java.util.ArrayList;

public class Carrier {
  ArrayList<Aircraft> aircrafts;
  int ammoStorage;
  int healthPoint;

  public Carrier(int ammoStorage, int healthPoint) {
    this.aircrafts = new ArrayList<>();
    this.ammoStorage = ammoStorage;
    this.healthPoint = healthPoint;
  }

  void addAircraft(Aircraft aircraftToAdd) {
    this.aircrafts.add(aircraftToAdd);
  }

  void fillAircrafts(int ammoToFill) throws Exception {
    int remainingAmmo = ammoToFill;
    if (remainingAmmo == 0) throw new Exception("Not enough ammo!");

    for (Aircraft aircraft : aircrafts) {
      if (remainingAmmo > 0) remainingAmmo = aircraft.refill(ammoToFill);
    }
    this.ammoStorage = remainingAmmo;
  }

  int getDamage() {
    int allDamage = 0;
    for (Aircraft aircraft : aircrafts) {
      allDamage += aircraft.baseDamage * aircraft.ammoStorage;
    }
    return allDamage;
  }

  void fight(Carrier carrierToFight) {
    carrierToFight.healthPoint -= this.getDamage();
  }

  void getStatus() {
    if (this.healthPoint == 0) {
      System.out.println("It's dead Jim :(");
      return;
    }

    System.out.printf(
        "HP: %s, Aircraft count: %s, Ammo Storage: %s, Total damage: %s%n",
        this.healthPoint, this.aircrafts.size(), this.ammoStorage, this.getDamage()
    );

    for (Aircraft aircraft : aircrafts) {
     System.out.println(aircraft.getStatus());
    }
  }
}
