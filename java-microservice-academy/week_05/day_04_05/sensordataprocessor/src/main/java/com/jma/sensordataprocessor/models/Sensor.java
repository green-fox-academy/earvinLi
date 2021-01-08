package com.jma.sensordataprocessor.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

@Document(collection = "sensors")
public class Sensor {
  @Id private String id;
  private double lat;
  private double lon;
  private Location location;
  private Weather weather;

  public Sensor(double lat, double lon, Location location, Weather weather) {
    this.lat = lat;
    this.lon = lon;
    this.location = location;
    this.weather = weather;
  }

  public String getId() {
    return id;
  }

  public double getLat() {
    return lat;
  }

  public double getLon() {
    return lon;
  }

  public Location getLocation() {
    return location;
  }

  public Weather getWeather() {
    return weather;
  }

  public void setWeather(Weather weather) {
    this.weather = weather;
  }
}
