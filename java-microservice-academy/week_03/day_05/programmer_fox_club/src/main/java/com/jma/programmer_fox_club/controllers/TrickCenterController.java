package com.jma.programmer_fox_club.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.jma.programmer_fox_club.models.Fox;
import com.jma.programmer_fox_club.services.FoxService;
import org.springframework.web.bind.annotation.ResponseStatus;

@Controller
public class TrickCenterController {
  private FoxService foxService;
  private Fox loggedInFox;

  @Autowired
  public TrickCenterController(FoxService foxService) {
    this.foxService = foxService;
  }

  @RequestMapping(value = "/trick-center", method = RequestMethod.GET)
  public String showNutritionStorePage(@RequestParam("foxName") String foxName, Model model) {
    this.loggedInFox = this.foxService.findAFox(foxName);
    model.addAttribute("foxTricks", loggedInFox.getTricks());
    return "trick-center";
  }

  @RequestMapping(value = "/trick-center", method = RequestMethod.POST)
  @ResponseStatus(HttpStatus.FOUND)
  public String addTrick(String foxTrick) {
    this.loggedInFox.addTrick(foxTrick);
    return "redirect:/information?foxName=" + loggedInFox.getName();
  }
}
