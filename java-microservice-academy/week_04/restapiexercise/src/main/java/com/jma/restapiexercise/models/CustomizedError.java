package com.jma.restapiexercise.models;

public class CustomizedError {
  String error;

  public CustomizedError(String errorText) {
    this.error = errorText;
  }

  public String getError() {
    return error;
  }

  public void setError(String error) {
    this.error = error;
  }
}
