package week_02.day_04.Calculator;

public class  Main {
  public static void main(String[] args) {
    //  Create a calculator class with generic methods
    //  Don't forget to use java<T extends Number> if you need
    //  It should have all the basic methods:
    //  java add, subtract, multiply, divide
    //  Use exceptions to handle errors in special cases! (find the special cases!)
    IntegerCalculator integerCalculator = new IntegerCalculator();
    System.out.println(IntegerCalculator.add(1 ,3));
  }
}
