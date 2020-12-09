package week_02.day_02;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.Files;
import java.util.List;


public class PrintEachLine {
  public static void main(String[] args) {
    // Write a program that opens a file called "my-file.txt", then prints
    // each line from the file.
    // If the program is unable to read the file (for example it does not exist),
    // then it should print the following error message: "Unable to read file: my-file.txt"
    try {
      Path filePath = Paths.get("src/week_02/assets/my_file.txt");
      List<String> lines = Files.readAllLines(filePath);
      for (String line : lines) System.out.println(line);
    } catch (Exception e) {
      System.out.println("Uh-oh, could not read the file!");
      System.out.println(e);
    }
  }
}
