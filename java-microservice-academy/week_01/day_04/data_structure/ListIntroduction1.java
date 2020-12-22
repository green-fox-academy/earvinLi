package week_01.day_04.data_structure;

import java.util.ArrayList;
import java.util.Collections;

public class ListIntroduction1 {
  public static void main(String... args) {
    ArrayList<String> names = new ArrayList<>();
    System.out.println(names.size());

    names.add("William");
    System.out.println(names.isEmpty());

    names.add("John");
    names.add("Amanda");
    System.out.println(names.size());
    System.out.println(names.get(2));

    for (String name : names) System.out.println(name);
    for (int i = 0; i < names.size(); i++) System.out.printf("%s. %s%n", i + 1, names.get(i));
    
    names.remove(1);
    Collections.reverse(names);
    names.forEach((name) -> System.out.println(name));
    names.clear();
  }
}
