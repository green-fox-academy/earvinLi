package com.jma.sensordataprocessor.controllers;

import com.jma.sensordataprocessor.models.Location;
import com.jma.sensordataprocessor.models.Sensor;
import com.jma.sensordataprocessor.models.Weather;
import com.jma.sensordataprocessor.services.MessageService;
import com.jma.sensordataprocessor.services.SensorService;
import com.jma.sensordataprocessor.services.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("weather")
public class WeatherController {
  private WeatherService weatherService;
  private MessageService messageService;
  private SensorService sensorService;

  @Autowired
  public WeatherController(WeatherService weatherService, MessageService messageService, SensorService sensorService) {
    this.weatherService = weatherService;
    this.messageService = messageService;
    this.sensorService = sensorService;
  }

  @PostMapping
  @ResponseBody
  public String updateWeather() {
    List<Sensor> sensorsFound = sensorService.findAllSensors();
    sensorsFound.forEach(sensor -> {
      Weather weatherToUpdate = weatherService.getWeather(sensor.getLat(), sensor.getLon());
      weatherToUpdate.setParentSensorId(sensor.getId());

      Location weatherLocation = sensor.getLocation();
      boolean overThresh = weatherToUpdate.getTemperature() < weatherLocation.getTempThresh()
        || weatherToUpdate.getWindSpeed() > weatherLocation.getSpeedThresh()
        || weatherToUpdate.getHumidity() > weatherLocation.getHumidThresh();
      if (overThresh) messageService.sendSendEmailMessage(weatherLocation.getUsersSubscribed());
      messageService.sendStoreWeatherMessage(weatherToUpdate);
    });
    return "sensors all send new data";
  }
}
