package com.jma.programmer_fox_club.models;

import java.util.Arrays;
import java.util.List;

public class Fox {
  private String name;
  List<Object> tricks;
  String food;
  String drink;

  public Fox(String name) {
    this.name = name;
    this.tricks = Arrays.asList("write HTML", "code in Java");
    this.food = "salad";
    this.drink = "water";
  }

  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }

  public List<Object> getTricks() {
    return tricks;
  }
  public void setTricks(List<Object> tricks) {
    this.tricks = tricks;
  }

  public String getFood() {
    return food;
  }
  public void setFood(String food) {
    this.food = food;
  }

  public String getDrink() {
    return drink;
  }
  public void setDrink(String drink) {
    this.drink = drink;
  }
}
