package week_02.day_01.garden_application;

public class Flower {
  String color;
  float currentWater;

  public Flower(String color) {
    this.color = color;
    this.currentWater = 0;
  }

  void waterFlower(float amountOfWater) {
    currentWater += amountOfWater * 0.75;
  }

  public boolean needToWater() {
    return currentWater < 5;
  }
}
