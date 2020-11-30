'use strict';

const Domino = require('./09-dominoes-domino');

function initializeDominoes() {
  const dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

const dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

const dominoSnake = [];
let currentSecondNum;

const firstNumberArr = [];
dominoes.map(domino => firstNumberArr.push(domino.values[0]));
const lowestStartNum = Math.min(...firstNumberArr);

dominoes.map(domino => {
  if (domino.values[0] === lowestStartNum) {
    currentSecondNum = domino.values[1];
    return dominoSnake.push(domino.toString());
  }
});

for (let i = 0; i < dominoes.length - 1; i++) {
  dominoes.map(domino => {
    if (domino.values[0] === currentSecondNum) {
      currentSecondNum = domino.values[1];
      return dominoSnake.push(domino.toString());
    }
  });
}

console.log(dominoSnake.join(','));

console.log(dominoes.toString());
