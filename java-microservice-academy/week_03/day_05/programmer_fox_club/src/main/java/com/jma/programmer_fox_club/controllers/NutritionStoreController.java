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
public class NutritionStoreController {
  private FoxService foxService;
  private Fox loggedInFox;

  @Autowired
  public NutritionStoreController(FoxService foxService) {
    this.foxService = foxService;
  }

  @RequestMapping(value = "/nutrition-store", method = RequestMethod.GET)
  public String showNutritionStorePage(@RequestParam("foxName") String foxName, Model model) {
    this.loggedInFox = this.foxService.findAFox(foxName);
    model.addAttribute("foxFood", loggedInFox.getFood());
    model.addAttribute("foxDrink", loggedInFox.getDrink());
    return "nutrition-store";
  }

  @RequestMapping(value = "/nutrition-store", method = RequestMethod.POST)
  @ResponseStatus(HttpStatus.FOUND)
  public String changeFoodAndDrink(String foxFood, String foxDrink) {
    this.loggedInFox.setFood(foxFood);
    this.loggedInFox.setDrink(foxDrink);
    return "redirect:/information?foxName=" + loggedInFox.getName();
  }
}
