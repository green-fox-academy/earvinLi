const path = require('path');

const app = require('./app');

app.post('/arrays', (req, res) => {
  const {
    what: action,
    numbers,
  } = req.body;

  let result;
  let errorMessage = '';

  switch (action) {
    case 'sum':
      result = 0;
      numbers.forEach(number => result += number);
      break;
    case 'multiply':
      result = 1;
      numbers.forEach(number => result *= number);
      break;
    case 'double':
      result = numbers.map(number => number * 2);
      break;
    default:
      errorMessage = 'Please provide what to do with the numbers!';
  }

  if (!req.body.what || !req.body.numbers) res.send({ error: errorMessage });
  res.send({ result });
});
