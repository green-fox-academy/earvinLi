public class Reverse {
  public static void main(String... args){
    String toBeReversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI";

    // Create a method that can reverse a String, which is passed as the parameter
    // Use it on this reversed string to check it!
    // Try to solve this using charAt() first, and optionally anything else after.

    System.out.println(reverse(toBeReversed));
  }

  public static String reverse(String stringToReverse) {
    String reversedString = "";
    for (int i = stringToReverse.length() - 1; i >= 0; i--) {
      reversedString += stringToReverse.charAt(i);
    }
    return reversedString;
  }
}
