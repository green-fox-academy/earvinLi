const path = require('path');

const app = require('./app');

app.post('/arrays', (req, res) => {
  const {
    what: action,
    numbers,
  } = req.body;

  switch (action) {
    case 'sum':
      let resultSum = 0;
      numbers.forEach(number => resultSum += number);
      res.send({ result: resultSum });
    case 'multiply':
      let resultMultiply = 1;
      numbers.forEach(number => resultMultiply *= number);
      res.send({ result: resultMultiply });
    case 'double':
      const resultDouble = numbers.map(number => number * 2);
      res.send({ result: resultDouble });
    default:
      res.send({ error: 'Please provide what to do with the numbers!' });
  }
});
