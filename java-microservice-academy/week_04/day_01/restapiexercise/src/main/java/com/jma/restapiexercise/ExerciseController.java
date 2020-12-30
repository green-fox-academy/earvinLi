package com.jma.restapiexercise;

import com.jma.restapiexercise.models.AppendA;
import com.jma.restapiexercise.models.CustomizedError;
import com.jma.restapiexercise.models.Doubling;
import com.jma.restapiexercise.models.Greeter;
import com.jma.restapiexercise.models.Until;
import com.jma.restapiexercise.models.UntileResult;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ExerciseController {
  @GetMapping("/doubling")
  @ResponseBody
  public Doubling doubling(@RequestParam("input") int input) {
    return new Doubling(input, input * 2);
  }

  @GetMapping("/greeter")
  @ResponseBody
  public Greeter greeter(@RequestParam("name") String name, @RequestParam("title") String title) {
    return new Greeter(String.format("Oh, hi there %s, my dear %s!", name, title));
  }

  @GetMapping("/appenda/{appendable}")
  @ResponseBody
  public AppendA appenda(@PathVariable("appendable") String appendable) {
    return new AppendA(appendable + 'a');
  }

  @PostMapping("/dountil/{action}")
  @ResponseBody
  public UntileResult dountil(@PathVariable("action") String action, @RequestBody Until until) {
    int result = 0;
    if (action.equals("sum")) {
      for (int i = 1; i <= until.getUntil(); i++) result += i;
    } else {
      result = 1;
      for (int i = 1; i <= until.getUntil(); i++) result *= i;
    }

    return new UntileResult(result);
  }

  @ExceptionHandler(MissingServletRequestParameterException.class)
  public ResponseEntity<CustomizedError> handleMissingParams(MissingServletRequestParameterException ex) {
    String name = ex.getParameterName();
    CustomizedError customizedError = new CustomizedError("I'm a teapot!");
    switch (name) {
      case "input":
        customizedError.setError("Please provide an input!");
        return ResponseEntity.status(HttpStatus.OK).body(customizedError);
      case "name":
        customizedError.setError("Please provide a name!");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(customizedError);
      case "title":
        customizedError.setError("Please provide a title!");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(customizedError);
      default:
        return ResponseEntity.status(HttpStatus.I_AM_A_TEAPOT).body(customizedError);
    }
  }
}
