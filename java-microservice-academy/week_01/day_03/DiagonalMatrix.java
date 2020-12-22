package week_01.day_03;

import java.util.Arrays;

public class DiagonalMatrix {
  public static void main(String[] args) {
    // - Create (dynamically*) a two dimensional array
    //   with the following matrix**. Use a loop!
    //
    //   1 0 0 0
    //   0 1 0 0
    //   0 0 1 0
    //   0 0 0 1
    //
    // - Print this two dimensional array to the output
    // * length should depend on a variable
    // ** Relax, a matrix is just like an array
    int[] exampleArr = {0, 0, 0, 0};
    int targetLength = exampleArr.length;
    int[][] resultArr = new int[targetLength][];
    for (int i = 0; i < targetLength; i++) {
      resultArr[i] = exampleArr;
    }
    System.out.println(Arrays.toString(resultArr));
  }
}
