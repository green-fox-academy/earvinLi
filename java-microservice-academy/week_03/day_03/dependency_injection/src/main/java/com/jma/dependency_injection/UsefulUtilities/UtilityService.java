package com.jma.dependency_injection.UsefulUtilities;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Service
public class UtilityService {

  private List<String> colors;
  private Random random;

  public UtilityService() {
    colors = new ArrayList<>();
    colors.add("red");
    colors.add("blue");
    colors.add("lime");
    colors.add("orange");
    colors.add("magenta");
    random = new Random();
  }

  public String randomColor() {
    return colors.get(random.nextInt(colors.size()));
  }


  public String caesar(String text, int number) {
    if (number < 0) {
      number = 26 + number;
    }

    String result = "";
    for (int i = 0; i < text.length(); i++) {
      int offset = Character.isUpperCase(text.charAt(i)) ? 'A' : 'a';
      result += (char) (((int) text.charAt(i) - number - offset) % 26 + offset);
    }
    return result;
  }

  public boolean validateEmail(String email) {
    return email.contains("@") && email.contains(".");
  }

  public String decodeCaesar(String text, int number) {
    String result = "";
    for (int i = 0; i < text.length(); i++) {
      int offset = Character.isUpperCase(text.charAt(i)) ? 'A' : 'a';
      int offSetDistance = (int) text.charAt(i) - number - offset;

      if (offSetDistance < 0) {
        result += (char) ((offSetDistance + 26) % 26 + offset);
      } else {
        result += (char) (offSetDistance + offset);
      }
    }
    return result;
  }
}
