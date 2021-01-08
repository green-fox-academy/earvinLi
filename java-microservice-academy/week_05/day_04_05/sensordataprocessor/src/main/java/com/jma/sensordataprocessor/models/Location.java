package com.jma.sensordataprocessor.models;

import java.io.Serializable;
import java.util.ArrayList;

public class Location {
  private double tempThresh;
  private double speedThresh;
  private double humidThresh;
  private ArrayList<String> usersSubscribed;

  public Location(double tempThresh, double speedThresh, double humidThresh, ArrayList<String> usersSubscribed) {
    this.tempThresh = tempThresh;
    this.speedThresh = speedThresh;
    this.humidThresh = humidThresh;
    this.usersSubscribed = usersSubscribed;
  }

  public double getTempThresh() {
    return tempThresh;
  }

  public void setTempThresh(double tempThresh) {
    this.tempThresh = tempThresh;
  }

  public double getSpeedThresh() {
    return speedThresh;
  }

  public void setSpeedThresh(double speedThresh) {
    this.speedThresh = speedThresh;
  }

  public double getHumidThresh() {
    return humidThresh;
  }

  public void setHumidThresh(double humidThresh) {
    this.humidThresh = humidThresh;
  }

  public ArrayList<String> getUsersSubscribed() {
    return usersSubscribed;
  }

  public void setUsersSubscribed(ArrayList<String> usersSubscribed) {
    this.usersSubscribed = usersSubscribed;
  }
}
