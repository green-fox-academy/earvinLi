package com.jma.dependency_injection;

import com.jma.dependency_injection.ColoringAround.RedColorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.jma.dependency_injection.HelloDependencyInjection.PrinterService;

@SpringBootApplication
public class DependencyInjectionApplication implements CommandLineRunner {
  private PrinterService printerService;
  private RedColorService redColorService;

  @Autowired
  DependencyInjectionApplication(PrinterService printerService, RedColorService redColorService) {
    this.printerService = printerService;
    this.redColorService = redColorService;
  }

  public static void main(String[] args) {
    SpringApplication.run(DependencyInjectionApplication.class, args);
  }

  @Override
  public void run(String... args) throws Exception {
    printerService.log("hello");
    redColorService.printColor();
  }
}
