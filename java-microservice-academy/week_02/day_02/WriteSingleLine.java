package week_02.day_02;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.Files;
import java.util.ArrayList;

public class WriteSingleLine {
  public static void main(String[] args) {
    // Write a function that is able to manipulate a file
    // By writing your name into it as a single line
    // The file should be named "my-file.txt"
    // In case the program is unable to write the file,
    // It should print the following error message: "Unable to write file: my-file.txt"
    ArrayList<String> content = new ArrayList<>();
    content.add("Hey, my name is Earvin Li.");

    try {
      Path filePath = Paths.get("src/week_02/assets/new_file.txt");
      Files.write(filePath, content);
      System.out.println("Write successfully!");
    } catch (Exception e) {
      System.out.println("Uh-oh, could not write the file!");
      System.out.println(e);
    }
  }
}

