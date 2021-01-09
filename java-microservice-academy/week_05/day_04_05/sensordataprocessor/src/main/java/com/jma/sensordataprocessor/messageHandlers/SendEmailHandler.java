package com.jma.sensordataprocessor.messageHandlers;

import com.jma.sensordataprocessor.models.Weather;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitHandler;
import org.springframework.amqp.rabbit.annotation.RabbitListener;

import java.util.List;

@RabbitListener(queues = "sendEmail")
public class SendEmailHandler {
  public static final Logger LOG = LoggerFactory.getLogger(StoreWeatherHandler.class);

  @RabbitHandler
  public void onSendEmailMessageReceived(List<String> emailMessage) {
    LOG.info("Email sent to notify users: {}", emailMessage);
  }
}
