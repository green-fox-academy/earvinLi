'use strict';

// - Create a function called `factorio`
//   that returns it's input's factorial

const factorio = num => {
  if (num === 0) return 1;

  let targetFactorial = 1;

  for (let i = 1; i <= num; i++) {
    targetFactorial *= i;
  }

  return targetFactorial;
};

console.log(factorio(7));
