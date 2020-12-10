package week_02.day_03.char_sequence;

public class Shifter implements CharSequence {
  String stringToWorkWith;
  int positionForShifting;

  public Shifter(String stringToWorkWith, int positionForShifting) {
    this.stringToWorkWith = stringToWorkWith.substring(positionForShifting);
  }

  @Override
  public int length() {
    return 0;
  }

  @Override
  public char charAt(int index) {
    return this.stringToWorkWith.charAt(index);
  }

  @Override
  public CharSequence subSequence(int start, int end) {
    return null;
  }
}
