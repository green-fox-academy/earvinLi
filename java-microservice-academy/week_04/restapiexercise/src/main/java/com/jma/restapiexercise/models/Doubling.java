package com.jma.restapiexercise.models;

public class Doubling {
  private int received;
  private int result;

  public Doubling(int received, int result) {
    this.received = received;
    this.result = result;
  }

  public int getReceived() {
    return received;
  }

  public int getResult() {
    return result;
  }
}
