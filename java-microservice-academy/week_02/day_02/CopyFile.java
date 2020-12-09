package week_02.day_02;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.Files;
import java.util.List;
import java.util.ArrayList;

public class CopyFile {
  public static void main(String[] args) {
    // Write a function that copies the contents of a file into another
    // It should take the filenames as parameters
    // It should return a boolean that shows if the copy was successful
    copyFile("my_file.txt", "even_another_new_file");
  }

  public static void copyFile(String sourceFileName, String targetFileName) {
    ArrayList<String> content = new ArrayList<>();

    try {
      // get content from the source file
      Path sourceFilePath = Paths.get("src/week_02/assets/" + sourceFileName);
      List<String> lines = Files.readAllLines(sourceFilePath);
      content.addAll(lines);
      System.out.println("Read successfully!");

      // copy content to the target file
      Path targetFilePath = Paths.get("src/week_02/assets/" + targetFileName);
      Files.write(targetFilePath, content);
      System.out.println("Write successfully!");
    } catch (Exception e) {
      System.out.println(e);
    }
  }
}



