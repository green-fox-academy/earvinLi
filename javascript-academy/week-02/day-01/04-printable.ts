// import Domino from '../week-01/day-04/09-dominoes/domino';
import FleetOfThings from '../../week-01/day-04/07-fleet-of-things/07-fleet-of-things-main';

interface Printable {
  printAllFields(): void;
}

class printableFleetOfThings extends FleetOfThings implements Printable {
  constructor() {
    super();
  }

  printAllFields() {
    console.log(super.main());
  }
}

const printableFleetOfThingsOne = new printableFleetOfThings();
printableFleetOfThingsOne.printAllFields();
