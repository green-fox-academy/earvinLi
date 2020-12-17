package com.jma.dependency_injection.UsefulUtilities;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/useful")
public class UtilityController {
  private UtilityService utilityService;

  @Autowired
  public UtilityController(UtilityService utilityService) {
    this.utilityService = utilityService;
  }

  @RequestMapping()
  public String showHomePage(Model model) {
    return "useful";
  }

  @RequestMapping("/colored")
  public String showColoredPage(Model model) {
    model.addAttribute("backgroundColor", utilityService.randomColor());
    return "colored";
  }

  @RequestMapping("/email")
  public String showEmailPage(@RequestParam("email") String email, Model model) {
    boolean isValid = utilityService.validateEmail(email);
    String nullMessage = isValid ? " " : "not ";
    model.addAttribute("message", email + " is " + nullMessage + "a email address");
    model.addAttribute("color", isValid ? "green" : "red");
    return "email";
  }

  @RequestMapping("/encoder")
  public @ResponseBody String encodeMessage(@RequestParam("text") String text, @RequestParam("number") int number) {
    return utilityService.caesar(text, number);
  }

  @RequestMapping("/decoder")
  public @ResponseBody String decodeMessage(@RequestParam("text") String text, @RequestParam("number") int number) {
    return utilityService.decodeCaesar(text, number);
  }
}
