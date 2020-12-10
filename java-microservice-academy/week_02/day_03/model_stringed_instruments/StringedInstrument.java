package week_02.day_03.model_stringed_instruments;

public abstract class StringedInstrument extends Instrument {
  int numberOfStrings;

  public StringedInstrument(String instrumentName, int numberOfStrings) {
    super(instrumentName);
    this.numberOfStrings = numberOfStrings;
  }

  protected abstract void sound();
}
