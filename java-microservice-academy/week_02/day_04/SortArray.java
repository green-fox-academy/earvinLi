package week_02.day_04;

import java.util.Arrays;

public class SortArray {
  public static void main(String[] args) {
    //  - Create a generic method with `<T extends Number>` so converting to primitive number types is available
    //  - This method takes an array in parameter, and sort it in a descending order
    //  - Pro tip: Temporary values/arrays help a lot
    //  - Whether or not you had an exception print out the elements of the array
    Integer[] arrayToSort = {1, 7, 4, 3, 8};
    System.out.println(Arrays.toString(sortArray(arrayToSort)));
  }

  public static <T extends Number> T[] sortArray (T[] inputArr) {
    for (int i = 0; i < inputArr.length; i++) {
      for (int j = i + 1; j < inputArr.length; j++) {
        T temp;
        if (inputArr[i].intValue() < inputArr[j].intValue()) {
          temp = inputArr[i];
          inputArr[i] = inputArr[j];
          inputArr[j] = temp;
        }
      }
    }
    return inputArr;
  }
}
