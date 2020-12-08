package garden_application;

public class Tree {
  String color;
  float currentWater;

  public Tree(String color) {
    this.color = color;
    this.currentWater = 0;
  }

  void waterTree(float amountOfWater) {
    currentWater += amountOfWater * 0.4;
  }

  boolean needToWater() {
    return currentWater < 10;
  }
}