package com.greenfoxacademy.springstart.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Random;

@Controller
public class HelloWebController {
  long greetCount = 0;
  String[] hellos = {
    "Mirëdita", "Ahalan", "Parev", "Zdravei", "Nei Ho", "Dobrý den", "Ahoj", "Goddag", "Goede dag, Hallo", "Hello", "Saluton", "Hei", "Bonjour",
    "Guten Tag", "Gia'sou", "Aloha", "Shalom", "Namaste", "Namaste", "Jó napot", "Halló", "Helló", "Góðan daginn", "Halo", "Aksunai", "Qanuipit", "Dia dhuit",
    "Salve", "Ciao", "Kon-nichiwa", "An-nyong Ha-se-yo", "Salvëte", "Ni hao", "Dzien' dobry", "Olá", "Bunã ziua", "Zdravstvuyte", "Hola", "Jambo", "Hujambo", "Hej",
    "Sa-wat-dee", "Merhaba", "Selam", "Vitayu", "Xin chào", "Hylo", "Sut Mae", "Sholem Aleychem", "Sawubona"
  };
  Random randomizer = new Random();

  @RequestMapping("/web/greeting")
  public String greeting(
      @RequestParam("name") String name,
      @RequestParam("fontSize") String fontSize,
      @RequestParam("color") String color,
      Model model
  ) {
    greetCount++;
    String helloWord = hellos[randomizer.nextInt(hellos.length)];

    model.addAttribute("fontSize", fontSize);
    model.addAttribute("color", color);

    model.addAttribute("helloWord", helloWord);
    model.addAttribute("name", name);
    model.addAttribute("greetCount", greetCount);
    return "greeting";
  }
}
