package com.jma.programmer_fox_club.services;

import com.jma.programmer_fox_club.models.Fox;
import org.springframework.beans.factory.annotation.Autowired;

public class FoxService {
  @Autowired
  public FoxService() {}

  public Fox addAFox(String foxName) {
    return new Fox(foxName);
  }
}
