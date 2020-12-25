package week_03.day_01;

import java.util.ArrayList;
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
    // for exercises 6, 9
    String stringOne = "eArViNearveee";
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

    // exercise 6 - the uppercase characters in a string
    System.out.println(
        Stream.of(stringOne.split(""))
            .filter(character -> Character.isUpperCase(character.charAt(0)))
            .collect(Collectors.toList())
    );

    // exercise 7 - strings which starts with a given letter
    System.out.println(searchByFirstLetter("A"));

    // exercise 8 - concatenate a Character list to a string
    System.out.println(exampleChars.collect(Collector.of(
      StringBuilder::new,
      StringBuilder::append,
      StringBuilder::append,
      StringBuilder::toString
    )) + " is swimming in this wild sea of Java Stream API!! Hope could survive...");

    // exercise 9 - the frequency of characters in a given string
    System.out.println(findLetterFrequency('e', stringOne));

    // exercise 10
    List<Fox> foxes = new ArrayList<>();
    foxes.add(new Fox("Earvin1", "red", 1));
    foxes.add(new Fox("Earvin2", "green", 2));
    foxes.add(new Fox("Earvin3", "green", 6));
    foxes.add(new Fox("Earvin4", "blue", 3));

    // foxes with green color
    List<Fox> targetFoxGroup1 = foxes.stream().filter(fox -> fox.color.equals("green")).collect(Collectors.toList());
    targetFoxGroup1.forEach(fox -> System.out.println(fox.name));
    // foxes with green color, and age less then 5 years
    List<Fox> targetFoxGroup2 = foxes.stream().filter(fox -> fox.color.equals("green") && fox.age < 5).collect(Collectors.toList());
    targetFoxGroup2.forEach(fox -> System.out.println(fox.name));
    // frequency of foxes by color
    System.out.println(foxes.stream().filter(fox -> fox.color.equals("green")).count());
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

  public static long findLetterFrequency(char targetLetter, String inputString) {
    return Stream.of(inputString.split("")).filter(character -> character.charAt(0) == targetLetter).count();
  }

  private static class Fox {
    String name;
    String color;
    int age;

    public Fox(String name, String color, int age) {
      this.name = name;
      this.color = color;
      this.age = age;
    }
  }
}
