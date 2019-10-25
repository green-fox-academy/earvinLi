const path = require('path');

const app = require('./app');

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

// Doubling endpoint
app.get('/doubling', (req, res) => {
  const { input } = req.query;
  if (!input) res.send({ error: 'Please provide an input!' });
  res.send({
    'received': input,
    'result': input * 2
  });
})

// Greeter endpoint
app.get('/greeter', (req, res) => {
  const {
    name,
    title,
  } = req.query;

  if (!name && !title) res.send({ error: 'Please provide a name and a title!' });
  if (!name) res.send({ error: 'Please provide a name!' });
  if (!title) res.send({ error: 'Please provide a title!' });

  res.send({ welcome_message: `Oh, hi there ${name}, my dear ${title}!` });
});
