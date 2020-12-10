package week_02.day_03.comparable;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Main {
  public static void main(String[] args) {
    List<Domino> dominoes = new ArrayList<>();

    dominoes.add(new Domino(1, 2));
    dominoes.add(new Domino(4, 6));
    dominoes.add(new Domino(1, 5));
    dominoes.add(new Domino(6, 7));
    dominoes.add(new Domino(2, 4));
    dominoes.add(new Domino(7, 1));
    dominoes.add(new Domino(7, 7));
    dominoes.add(new Domino(7, 7));

    Collections.sort(dominoes);
    System.out.println(dominoes);

    List<Thing> things = new ArrayList<>();

    Thing buyMilk = new Thing("Buy more beer");
    buyMilk.complete();
    things.add(buyMilk);
    things.add(new Thing("Buy some beer"));
    things.add(new Thing("Buy some milk"));

    Collections.sort(things);
    System.out.println(things);
  }
}
