package com.jma.sensordataprocessor.configs;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.jma.sensordataprocessor.handlers.MessageHandler;
import com.jma.sensordataprocessor.repositories.SensorRepository;
import com.jma.sensordataprocessor.services.SensorService;
import com.jma.sensordataprocessor.services.WeatherService;
import org.springframework.amqp.core.Queue;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class AppConfig {
  // format weather api data
  @Bean
  public RestTemplate restTemplate(RestTemplateBuilder restTemplateBuilder) {
    return restTemplateBuilder.build();
  }

  // define queues
  @Bean
  public Queue storeWeather() {
    return new Queue("storeWeather");
  }

  @Bean
  public Queue sendEmail() {
    return new Queue("sendEmail");
  }

  @Bean
  public MessageHandler messageHandler() {
    return new MessageHandler();
  }
}
