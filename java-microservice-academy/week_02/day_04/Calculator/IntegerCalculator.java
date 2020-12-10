package week_02.day_04.Calculator;

public class IntegerCalculator extends GenericCalculator<Integer> {
  @Override
  public Integer add(Integer numA, Integer numB) {
    return numA + numB;
  }

  @Override
  public Integer subtract(Integer numA, Integer numB) {
    return numA - numB;
  }

  @Override
  public Integer multiply(Integer numA, Integer numB) {
    return numA * numB;
  }

  @Override
  public Integer divide(Integer numA, Integer numB) {
    if (numB == 0) throw new ArithmeticException("Divider cannot be 0!");
    return numA / numB;
  }
}
