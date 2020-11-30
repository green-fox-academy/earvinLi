const readline = require('readline');

const startGame = require('./01-minesweeper-main');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readLineAsync = (message) => new Promise((resolve, reject) => {
  rl.question(message, (answer) => {
    resolve(answer);
  });
});

const synchronousPrompt = async () => {
  let dimension = 0;
  let mine = 0;

  while (dimension <= 0) {
    dimension = parseInt(await readLineAsync('How big the gameplay should be (n)?\n'));
  }

  while (mine <= 0) {
    mine = parseInt(await readLineAsync('How many mines you\'d like to find (k)?\n'));
  }

  startGame(dimension, mine);

  rl.close();
};

synchronousPrompt();
