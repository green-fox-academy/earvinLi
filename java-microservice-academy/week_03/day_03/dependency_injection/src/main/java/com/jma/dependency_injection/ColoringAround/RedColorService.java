package com.jma.dependency_injection.ColoringAround;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jma.dependency_injection.HelloDependencyInjection.PrinterService;

@Service
public class RedColorService implements MyColor {
  private PrinterService printerService;

  @Autowired
  public RedColorService(PrinterService printerService) {
    this.printerService = printerService;
  }

  @Override
  public void printColor() {
    printerService.log("It is red in color...");
  }
}
