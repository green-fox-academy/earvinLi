package com.jma.sensordataprocessor.configs;

import com.jma.sensordataprocessor.messageHandlers.SendEmailHandler;
import com.jma.sensordataprocessor.messageHandlers.StoreWeatherHandler;
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
  public StoreWeatherHandler storeWeatherMessageHandler() {
    return new StoreWeatherHandler();
  }

  @Bean
  public SendEmailHandler sendEmailMessageHandler() {
    return new SendEmailHandler();
  }
}
