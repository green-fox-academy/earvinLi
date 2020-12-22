package week_01.day_03;

import java.util.Arrays;

public class DoubleItems {
  public static void main(String[] args) {
    // - Create an array variable named `numList`
    //   with the following content: `[3, 4, 5, 6, 7]`
    // - Double all the values in the array
    int[] numList = {3, 4, 5, 6, 7};
    for (int i = 0; i < numList.length; i++) numList[i] *= 2;
    System.out.println(Arrays.toString(numList));
  }
}
