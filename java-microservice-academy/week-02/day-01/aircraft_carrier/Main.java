package aircraft_carrier;

public class Main {
  public static void main (String ...args) throws Exception {
    Carrier myCarrier = new Carrier(2300, 5000);

    myCarrier.addAircraft(new Aircraft("F35"));
    myCarrier.addAircraft(new Aircraft("F35"));
    myCarrier.addAircraft(new Aircraft("F35"));
    myCarrier.addAircraft(new Aircraft("F16"));
    myCarrier.addAircraft(new Aircraft("F16"));

    myCarrier.fillAircrafts(1000);
    myCarrier.getStatus();
  }
}
