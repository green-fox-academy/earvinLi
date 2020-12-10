package week_02.day_04.Calculator;

public abstract class GenericCalculator<T extends Number> {
  public abstract T add(T numA, T numB);
  public abstract T subtract(T numA, T numB);
  public abstract T multiply(T numA, T numB);
  public abstract T divide(T numA, T numB);
}
