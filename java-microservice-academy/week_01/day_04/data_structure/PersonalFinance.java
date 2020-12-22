package week_01.day_04.data_structure;

import java.util.Arrays;
import java.util.ArrayList;
import java.util.Collections;

public class PersonalFinance {
  public static void main(String... args) {
    ArrayList<Integer> expenses = new ArrayList<>();
    expenses.addAll(Arrays.asList(500, 1000, 1250, 175, 800, 120));

    int totalExpense = expenses.stream().mapToInt(expense -> expense).sum();
    System.out.println(totalExpense);

    System.out.println(Collections.max(expenses));
    System.out.println(Collections.min(expenses));
    System.out.println(totalExpense / expenses.size());
  }
}
