package com.jma.programmer_fox_club.configs;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


import com.jma.programmer_fox_club.services.FoxService;
import com.jma.programmer_fox_club.repositories.FoxRepository;

@Configuration
public class AppConfig {
  @Bean
  public FoxRepository foxRepositoryBean() {
    return new FoxRepository();
  }

  @Bean
  public FoxService foxServiceBean() {
    return new FoxService(foxRepositoryBean());
  }
}
