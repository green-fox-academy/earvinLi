package week_02.day_04;

public class SumArray {
  public static void main(String[] args) throws Exception {
    //  Create a generic method with <T extends Number> so converting to primitive number types is available
    //  This method takes an array, and an integer length value
    //  This method should return the sum of the arrays elements
    //  Handle exceptions where your the length value is more then the bounds of the array
    //  Whether or not you had an exception print out the elements of the array
    Integer[] arrayToSort = {1, 7, 4, 3, 8};
    System.out.println(sumArray(arrayToSort, 3));
  }

  public static <T extends Number> int sumArray (T[] inputArr, int endPosition) throws Exception {
    if (endPosition > inputArr.length) throw new Exception("Position out of range!");
    int sum = 0;
    for (int i = 0; i < endPosition; i++) sum += inputArr[i].intValue();
    return sum;
  }
}
