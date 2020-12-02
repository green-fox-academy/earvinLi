import java.util.Arrays;

public class AppendA {
  public static void main(String[] args) {
    // - Create an array variable named `animals`
    //   with the following content: `["koal", "pand", "zebr"]`
    // - Add all elements an `"a"` at the end
    String[] animals = {"koal", "pand", "zebr"};
    String[] newAnimals = Arrays.copyOf(animals, animals.length + 1);
    newAnimals[animals.length] = "a";
    System.out.println(Arrays.toString(newAnimals));
  }
}
