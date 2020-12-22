package week_01.day_02;

import java.util.Arrays;
import java.util.IntSummaryStatistics;
import java.util.Scanner;

public class AverageOfInput {
  public static void main(String[] args) {
    System.out.println("Please give me five numbers in a row separated by empty spaces:");
    Scanner scanner = new Scanner(System.in);
    String inputNumbers = scanner.nextLine();

    IntSummaryStatistics inputNumbersStats = Arrays.asList(inputNumbers.split(" "))
      .stream().mapToInt(number -> Integer.parseInt(number)).summaryStatistics();
    System.out.printf("Sum: %s, Average: %s", inputNumbersStats.getSum(), inputNumbersStats.getAverage());
  }
}
