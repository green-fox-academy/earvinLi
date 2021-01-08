package com.jma.sensordataprocessor.services;

import com.jma.sensordataprocessor.models.Location;
import com.jma.sensordataprocessor.models.Sensor;
import com.jma.sensordataprocessor.models.Weather;
import com.jma.sensordataprocessor.repositories.SensorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SensorService {
  private SensorRepository sensorRepository;
  private WeatherService weatherService;

  @Autowired
  public SensorService(SensorRepository sensorRepository, WeatherService weatherService) {
    this.sensorRepository = sensorRepository;
    this.weatherService = weatherService;
  }

  public Sensor generateSensor(double latitude, double longitude) {
    ArrayList<String> usersSubscribed = new ArrayList<>();
    usersSubscribed.add("Earvin");
    Location location = new Location(5, 5, 100, usersSubscribed);
    Sensor testSensor = new Sensor(latitude, longitude, location, weatherService.getWeather(latitude, longitude));
    sensorRepository.insert(testSensor);
    return testSensor;
  }

  public List<Sensor> findAllSensors() {
    List<Sensor> sensorsFound = sensorRepository.findAll();
    return sensorsFound;
  }

  public void updateSensorWeather(Weather sensorToUpdate) {
//    sensorRepository.save(sensorToUpdate);
  }
}
