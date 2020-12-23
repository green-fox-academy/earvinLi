package com.jma.programmer_fox_club.configs;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.jma.programmer_fox_club.services.FoxService;

@Configuration
public class AppConfig {
  @Bean
  public FoxService foxService() {
    return new FoxService();
  }
}
