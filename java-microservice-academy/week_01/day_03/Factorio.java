package week_01.day_03;

public class Factorio {
  public static void main(String[] args) {
    // - Create a function called `factorio`
    //   that returns it's input's factorial
    System.out.println(factorio(5));
  }

  public static int factorio(int boundary) {
    int factorio = 1;
    for(int i = 1; i <= boundary; i++) factorio *= i;
    return factorio;
  }
}
