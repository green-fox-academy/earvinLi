package com.jma.programmer_fox_club.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class MainController {
  @GetMapping()
  public String showMainPage() {
    return "index";
  }
}
