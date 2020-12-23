package com.jma.programmer_fox_club.controllers;

import com.jma.programmer_fox_club.models.Fox;
import com.jma.programmer_fox_club.services.FoxService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class LoginController {
  private FoxService foxService;

  @Autowired
  public LoginController(FoxService foxService) {
    this.foxService = foxService;
  }

  @RequestMapping(value = {"/", "/login"}, method = RequestMethod.GET)
  public String showLoginPage(Model model) {
    model.addAttribute("fox", new Fox("Mr. Fox"));
    return "login";
  }

  @RequestMapping(value = "/login", method = RequestMethod.POST)
  public String postName(Fox fox) {
    this.foxService.addAFox(fox);
    return "redirect:/information?foxName=" + fox.getName();
  }
}
