package com.jma.sensordataprocessor.controllers;

import com.jma.sensordataprocessor.models.Sensor;
import com.jma.sensordataprocessor.models.Weather;
import com.jma.sensordataprocessor.services.MessageService;
import com.jma.sensordataprocessor.services.SensorService;
import com.jma.sensordataprocessor.services.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SensorController {
  private SensorService sensorService;

  @Autowired
  public SensorController(SensorService sensorService) {
    this.sensorService = sensorService;
  }

  @PostMapping
  @ResponseBody
  public Weather generateSensor(@RequestParam("lat") String latitude, @RequestParam("lon") String longitude) {
    Sensor testSensor = sensorService.generateSensor(Double.parseDouble(latitude), Double.parseDouble(longitude));
    return testSensor.getWeather();
  }
}
