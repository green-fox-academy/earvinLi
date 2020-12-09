package week_02.day_02;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;

public class ReversedLines {
  public static void main(String[] args) {
    // Write a function that takes a filename as string,
    // then returns the number of lines the file contains.
    // It should return zero if it can't open the file, and
    // should not raise any error.
    reverseLines("reversed_lines.txt", "not_reversed_lines.txt");
  }

  public static void reverseLines(String sourceFileName, String targetFileName) {
    ArrayList<String> reversedContent = new ArrayList<>();

    try {
      // read the source file
      Path sourceFilePath = Paths.get("src/week_02/assets/" + sourceFileName);
      List<String> lines = Files.readAllLines(sourceFilePath);
      System.out.println("Read Successfully!");

      // reverse lines
      for (String line : lines) reversedContent.add(reverseString(line));

      // write the reversed lines to the target file
      Path targetFilePath = Paths.get("src/week_02/assets/" + targetFileName);
      Files.write(targetFilePath, reversedContent);
      System.out.println("Write Successfully!");
    } catch (Exception e) {
      System.out.println(e);
    }
  }

  public static String reverseString(String stringToReverse) {
    StringBuilder reversedString = new StringBuilder();
    for (int i = stringToReverse.length() - 1; i >= 0; i--) {
      reversedString.append(stringToReverse.charAt(i));
    }
    return reversedString.toString();
  }
}
