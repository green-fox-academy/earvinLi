package com.jma.restapiexercise.models;

public class Greeter {
  private String welcome_message;

  public Greeter(String welcome_message) {
    this.welcome_message = welcome_message;
  }

  public String getWelcome_message() {
    return welcome_message;
  }
}
