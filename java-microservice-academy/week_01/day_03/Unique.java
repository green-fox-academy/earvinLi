package week_01.day_03;

import java.util.ArrayList;

public class Unique {
  public static void main(String[] args) {
    //  Create a function that takes a list of numbers as a parameter
    //  Returns a list of numbers where every number in the list occurs only once

    //  Example
    System.out.println(unique(new int[] {1, 11, 34, 11, 52, 61, 1, 34}));
    //  should print: `[1, 11, 34, 52, 61]`
  }

  public static ArrayList unique(int[] targetArr) {
    ArrayList<Integer> resultArr = new ArrayList<>();

    for (int i = 0; i < targetArr.length; i++) {
      boolean alreadyExists = resultArr.contains(targetArr[i]);
      if (!alreadyExists) resultArr.add(targetArr[i]);
    }

    return resultArr;
  }
}
