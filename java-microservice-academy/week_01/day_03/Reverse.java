package week_01.day_03;

import java.util.Arrays;

public class Reverse {
  public static void main(String[] args) {
    // - Create an array variable named `numbers`
    //   with the following content: `[3, 4, 5, 6, 7]`
    // - Reverse the order of the elements in `numbers`
    // - Print the elements of the reversed `numbers`
    int[] numbers = {3, 4, 5, 6, 7};
    int[] reversedNumbers = new int[numbers.length];
    for (int i = numbers.length - 1; i >= 0; i--) {
      reversedNumbers[numbers.length - 1 - i] = numbers[i];
    }
    System.out.println(Arrays.toString(reversedNumbers));
  }
}
