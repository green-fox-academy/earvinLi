package week_02.day_02;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.Files;
import java.util.ArrayList;

public class WriteMultipleLines {
  public static void main(String[] args) {
    // Create a function that takes 3 parameters: a path, a word and a number
    // and is able to write into a file.
    // The path parameter should be a string that describes the location of the file you wish to modify
    // The word parameter should also be a string that will be written to the file as individual lines
    // The number parameter should describe how many lines the file should have.
    // If the word is 'apple' and the number is 5, it should write 5 lines
    // into the file and each line should read 'apple'
    // The function should not raise any errors if it could not write the file.
    writeMultipleLines(
        "src/week_02/assets/another_new_file.txt",
        "apple",
        5
    );
  }

  public static void writeMultipleLines(String filePathToWrite, String contentToWrite, int numberOfWords) {
    ArrayList<String> content = new ArrayList<>();
    for (int i = 0; i < numberOfWords; i++) content.add(contentToWrite);

    try {
      Path filePath = Paths.get(filePathToWrite);
      Files.write(filePath, content);
      System.out.println("Write successfully!");
    } catch (Exception e) {
      System.out.println("Uh-oh, could not write the file!");
      System.out.println(e);
    }
  }
}


