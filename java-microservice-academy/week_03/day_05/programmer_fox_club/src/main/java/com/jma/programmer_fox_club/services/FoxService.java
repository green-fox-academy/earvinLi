package com.jma.programmer_fox_club.services;

import repositories.FoxRepository;
import com.jma.programmer_fox_club.models.Fox;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FoxService {
  private FoxRepository foxRepository;

  @Autowired
  public FoxService(FoxRepository foxRepository) {
    this.foxRepository = foxRepository;
  }

  public void addAFox(Fox foxToAdd) {
    this.foxRepository.addAFoxToFoxes(foxToAdd);
  }

  public Fox findAFox(String foxName) {
    return this.foxRepository.findAFoxFromFoxes(foxName);
  }
}
