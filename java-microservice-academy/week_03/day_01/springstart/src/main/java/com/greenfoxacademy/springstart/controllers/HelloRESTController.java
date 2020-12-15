package com.greenfoxacademy.springstart.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloRESTController {
  AtomicLong newAtomicLong = new AtomicLong(0, "Hello World!");
  long greetCount = 0;

  @RequestMapping(value="/greeting")
  public @ResponseBody AtomicLong greeting(@RequestParam("name") String name) {
    greetCount += 1;

    newAtomicLong.setGreetCount(greetCount);
    newAtomicLong.setContent("Hello " + name + "!");
    return newAtomicLong;
  }
}
