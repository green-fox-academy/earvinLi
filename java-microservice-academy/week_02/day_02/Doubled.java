package week_02.day_02;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;

public class Doubled {
  public static void main(String[] args) {
    // Write a function that takes a filename as string,
    // then returns the number of lines the file contains.
    // It should return zero if it can't open the file, and
    // should not raise any error.
    fixDuplicatedChars("duplicated_chars.txt", "not_duplicated_chars.txt");
  }

  public static void fixDuplicatedChars(String sourceFileName, String targetFileName) {
    ArrayList<String> fixedContent = new ArrayList<>();
    List<String> lines = null;

    try {
      Path sourceFilePath = Paths.get("src/week_02/assets/" + sourceFileName);
      lines = Files.readAllLines(sourceFilePath);
    } catch (Exception e) {
      System.out.println("Uh-oh, could not read the file!");
      System.out.println(e);
    }


    for (String line : lines) {
      StringBuilder stringToFix = new StringBuilder(line);
      for (int i = 0; i < stringToFix.length(); i++) {
        if (i % 2 == 1) stringToFix.setCharAt(i, 'a');
      }
      String resultString = stringToFix.toString();
      resultString = resultString.replace('a', '\0');
      fixedContent.add(resultString);
    }

    try {
      Path targetFilePath = Paths.get("src/week_02/assets/" + targetFileName);
      Files.write(targetFilePath, fixedContent);
    } catch (Exception e) {
      System.out.println("Uh-oh, could not write the file!");
      System.out.println(e);
    }
  }
}

