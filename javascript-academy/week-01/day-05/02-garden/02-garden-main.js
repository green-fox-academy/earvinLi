'use strict';

const Garden = require('./02-garden-garden');
const FLower = require('./02-garden-flower');
const Tree = require('./02-garden-tree');

const gardenOne = new Garden();
gardenOne.addPlant(new FLower('yellow'));
gardenOne.addPlant(new FLower('blue'));
gardenOne.addPlant(new Tree('purple'));
gardenOne.addPlant(new Tree('orange'));

gardenOne.getStatus();
console.log('');

gardenOne.water(40);
gardenOne.getStatus();
console.log('');

gardenOne.water(70);
gardenOne.getStatus();
console.log('');
