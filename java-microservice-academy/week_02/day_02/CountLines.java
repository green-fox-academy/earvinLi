package week_02.day_02;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.Files;
import java.util.List;

public class CountLines {
  public static void main(String[] args) {
    // Write a function that takes a filename as string,
    // then returns the number of lines the file contains.
    // It should return zero if it can't open the file, and
    // should not raise any error.
    System.out.println(countLines("my_file.txt"));
  }

  public static int countLines(String fileName) {
    try {
      Path filePath = Paths.get("src/week_02/assets/" + fileName);
      List<String> lines = Files.readAllLines(filePath);
      return lines.size();
    } catch (Exception e) {
      return 0;
    }
  }
}
