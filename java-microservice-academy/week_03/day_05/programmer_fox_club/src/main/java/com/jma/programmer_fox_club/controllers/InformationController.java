package com.jma.programmer_fox_club.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.jma.programmer_fox_club.models.Fox;
import com.jma.programmer_fox_club.services.FoxService;

@Controller
public class InformationController {
  private FoxService foxService;

  @Autowired
  public InformationController(FoxService foxService) {
    this.foxService = foxService;
  }

  @RequestMapping(value = {"/information"}, method = RequestMethod.GET)
  public String showMainPage() {
    return "information";
  }

  @RequestMapping(value = "/information", method = RequestMethod.GET, params = "foxName")
  public String showMainPage(@RequestParam String foxName, Model model) {
    Fox loggedInFox = this.foxService.findAFox(foxName);
    model.addAttribute("loggedInFox", loggedInFox);
    return "information";
  }
}
