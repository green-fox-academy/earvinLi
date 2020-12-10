package week_02.day_03.char_sequence;

public class Gnirts implements CharSequence {
  String stringToWorkWith;

  public Gnirts(String stringToWorkWith) {
    this.stringToWorkWith = stringToWorkWith;
  }

  @Override
  public int length() {
    return 0;
  }

  @Override
  public char charAt(int index) {
    return this.stringToWorkWith.charAt(stringToWorkWith.length() - 1 - index);
  }

  @Override
  public CharSequence subSequence(int start, int end) {
    return null;
  }
}
