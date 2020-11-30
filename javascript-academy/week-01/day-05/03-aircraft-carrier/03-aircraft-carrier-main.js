'use-strict';

const Aircraft = require('./03-aircraft-carrier-aircraft');
const Carrier = require('./03-aircraft-carrier-carrier');

const carrierOne = new Carrier();
const carrierTwo = new Carrier();
carrierOne.addAircraft(new Aircraft('F16', 8, 30));
carrierOne.addAircraft(new Aircraft('F35', 12, 50));

carrierOne.fill();
console.log(carrierOne.getStatus());
