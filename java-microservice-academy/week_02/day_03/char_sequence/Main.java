package week_02.day_03.char_sequence;

public class Main {
  public static void main(String[] args) {
    Gnirts gnirts = new Gnirts("example");
    System.out.println(gnirts.charAt(1));

    Shifter shifter = new Shifter("example", 2);
    System.out.println(shifter.charAt(0));
  }
}
