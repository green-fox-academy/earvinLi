package week_02.day_03.model_stringed_instruments;

public abstract class Instrument {
  protected String instrumentName;

  public Instrument(String instrumentName) {
    this.instrumentName = instrumentName;
  }

  protected abstract void play();
}
