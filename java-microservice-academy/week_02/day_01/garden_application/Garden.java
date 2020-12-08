package week_02.day_01.garden_application;

import java.util.ArrayList;

public class Garden {
  ArrayList<Flower> flowers;
  ArrayList<Tree> trees;

  public Garden() {
    this.flowers = new ArrayList<>();
    this.trees = new ArrayList<>();
  }

  void addFlower(Flower flower) {
    this.flowers.add(flower);
  }

  void addTree(Tree tree) {
    this.trees.add(tree);
  }

  void waterGarden(int amountOfWater) {
    System.out.println("Watering with" + amountOfWater);

    int numberOfPlantsToWater = 0;
    for (Flower flower : flowers) if (flower.needToWater()) numberOfPlantsToWater += 1;
    for (Tree tree : trees) if (tree.needToWater()) numberOfPlantsToWater += 1;

    float amountToWater = amountOfWater / numberOfPlantsToWater;
    for (Flower flower : flowers) flower.waterFlower(amountToWater);
    for (Tree tree : trees) tree.waterTree(amountToWater);
  }

  void info() {
    for (Flower flower : flowers) {
      if (flower.needToWater()) {
        System.out.printf("The %s Flower needs water%n", flower.color);
      } else {
        System.out.printf("The %s Flower doesn't water%n", flower.color);
      }
    }
    for (Tree tree : trees) {
      if (tree.needToWater()) {
        System.out.printf("The %s Tree needs water%n", tree.color);
      } else {
        System.out.printf("The %s Tree doesn't water%n", tree.color);
      }
    }
  }
}
