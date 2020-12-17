package com.jma.dependency_injection.ColoringAround;

public class BlueColor implements MyColor {
  @Override
  public void printColor() {
    System.out.println("It is blue in color...");
  }
}
