package com.jma.sensordataprocessor.services;

import com.jma.sensordataprocessor.models.Weather;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {
  private RabbitTemplate rabbitTemplate;

  @Autowired
  public MessageService(RabbitTemplate rabbitTemplate) {
    this.rabbitTemplate = rabbitTemplate;
  }

  public void sendStoreWeatherMessage(Weather weatherMessage) {
    rabbitTemplate.convertAndSend("storeWeather", weatherMessage);
  }

  public void sendSendEmailMessage(List<String> emailMessage) {
    rabbitTemplate.convertAndSend("sendEmail", emailMessage);
  }
}
