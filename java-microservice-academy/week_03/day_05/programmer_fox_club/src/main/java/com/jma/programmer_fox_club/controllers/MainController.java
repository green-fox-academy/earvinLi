package com.jma.programmer_fox_club.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {
  @RequestMapping(value = {"/", "/main"}, method = RequestMethod.GET)
  public String showMainPage() {
    return "main";
  }

  @RequestMapping(value = "/main", method = RequestMethod.GET, params = "foxName")
  public String showMainPage(@RequestParam String foxName, Model model) {
    model.addAttribute("foxName", foxName);
    return "main";
  }
}
