package com.greenfoxacademy.springstart;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloWorldController {
  @RequestMapping(value="/hello")
  public @ResponseBody String hello() {
    return "Hello World!";
  }
}
