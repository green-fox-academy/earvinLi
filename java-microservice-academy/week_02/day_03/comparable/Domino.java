package week_02.day_03.comparable;

public class Domino implements Comparable<Domino>{
  private final int left;
  private final int right;

  public Domino(int left, int right) {
    this.left = left;
    this.right = right;
  }

  public int getLeftSide() {
    return left;
  }

  public int getRightSide() {
    return right;
  }

  @Override
  public String toString() {
    return "[" + left + ", " + right + "]";
  }

  @Override
  public int compareTo(Domino o) {
    if (this.left != o.getLeftSide()) {
      return this.left > o.getLeftSide() ? 1 : -1;
    } else {
      if (this.right == o.getRightSide()) return 0;
      return this.right > o.getRightSide() ? 1 : -1;
    }
  }
}
