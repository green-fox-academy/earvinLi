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
}
