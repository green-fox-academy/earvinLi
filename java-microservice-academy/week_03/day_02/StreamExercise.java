package week_03.day_01;

import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.lang.StringBuilder;
import java.util.stream.Stream;

public class StreamExercise {
  public static void main (String[] args) {
    // example numbers lists
    // for exercises 1, 2, 4
    List<Integer> numbersListOne = Arrays.asList(1, 3, -2, -4, -7, -3, -8, 12, 19, 6, 9, 10, 14);
    // for exercises 3
    List<Integer> numbersListTwo = Arrays.asList(3, 9, 2, 8, 6, 5);
    // for exercises 5
    List<Integer> numberListThree = Arrays.asList(5, 9, 1, 2, 3, 7, 5, 6, 7, 3, 7, 6, 8, 5, 4, 9, 6, 2);

    // example strings
    String stringOne = "eArViN";
    Stream<Character> exampleChars = Stream.of('E', 'a', 'r', 'v', 'i', 'n');


    // predicates
    Predicate<Integer> isEven = number -> number % 2 == 0;
    Predicate<Integer> isOdd = number -> number % 2 == 1 || number % 2 == -1;
    Predicate<Integer> isPositive = number -> number > 0;

    // exercise 1 - even numbers
    System.out.println(numbersListOne.stream().filter(isEven).collect(Collectors.toList()));

    // exercise 2 - squared value of the positive numbers
    System.out.println(numbersListOne.stream().filter(isPositive).map(number -> toSquare(number)).collect(Collectors.toList()));

    // exercise 3 - squared value is more then 20
    System.out.println(numbersListTwo.stream().filter(number -> toSquare(number) > 20).collect(Collectors.toList()));

    // exercise 4 - average value of the odd numbers
    System.out.println(numbersListTwo.stream().filter(isOdd).mapToInt(Integer::intValue).summaryStatistics().getAverage());

    // exercise 5 - sum of the odd numbers
    System.out.println(numberListThree.stream().filter(isOdd).mapToInt(Integer::intValue).summaryStatistics().getSum());

    // exercise 6 - sum of the odd numbers
    System.out.println(stringOne);

    // exercise 7 - strings which starts with a given letter
    System.out.println(searchByFirstLetter("A"));

    // exercise 8 - concatenate a Character list to a string
    System.out.println(exampleChars.collect(Collector.of(
      StringBuilder::new,
      StringBuilder::append,
      StringBuilder::append,
      StringBuilder::toString
    )) + " is swimming in this wild sea of Java Stream API!! Hope could survive...");

  }

  public static Integer toSquare(Integer inputNumber) {
    return inputNumber * inputNumber;
  }

  public static List<String> searchByFirstLetter(String firstLetter) {
    List<String> cities = Arrays.asList(
      "ROME", "LONDON", "NAIROBI", "CALIFORNIA", "ZURICH", "NEW DELHI", "AMSTERDAM", "ABU DHABI", "PARIS"
    );
    return cities.stream().filter(city -> city.startsWith(firstLetter)).collect(Collectors.toList());
  }
}
