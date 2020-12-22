package week_01.day_03;

public class Sum {
  public static void main(String[] args) {
    // Write a function called `sum` that returns the sum of numbers from zero to the given parameter
    System.out.println(sum(100));
  }

  public static int sum(int boundary) {
    int sum = 0;
    for(int i = 0; i <= boundary; i++) sum += i;
    return sum;
  }
}
