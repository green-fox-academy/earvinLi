package week_01.day_04.data_structure;

import java.util.ArrayList;
import java.util.Arrays;

public class ListIntroduction2 {
  public static void main(String... args) {
    ArrayList<String> A = new ArrayList<>();
    A.add("Apple");
    A.add("Avocado");
    A.add("Blueberries");
    A.add("Durian");
    A.add("Lychee");

    ArrayList<String> B = new ArrayList<>();
    B.addAll(A);

    System.out.println(A.contains("Durian"));

    B.remove("Durian");
    A.add(4, "Kiwifruit");

    System.out.println(A.size() == B.size());

    System.out.println(A.indexOf("Avocado"));
    System.out.println(B.indexOf("Durian"));

    B.addAll(Arrays.asList("Passion Fruit", "Pomelo"));
    System.out.println(A.get(2));
  }
}
