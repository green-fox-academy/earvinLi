package com.jma.sensordataprocessor.handlers;

import com.jma.sensordataprocessor.models.Weather;
import com.jma.sensordataprocessor.services.SensorService;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitHandler;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;

@RabbitListener(queues = "storeWeather")
public class MessageHandler {
  public static final Logger LOG = LoggerFactory.getLogger(MessageHandler.class);
  @Autowired private SensorService sensorService;

  @RabbitHandler
  public void onStoreWeatherMessageReceived(Weather weatherMessage) {
    JSONObject weatherToUpdate = new JSONObject(weatherMessage);
    LOG.info("JSON Message received: {}", weatherToUpdate.getString("parentSensorId"));
//    sensorService.updateSensorWeather(weatherMessage);
  }
}
