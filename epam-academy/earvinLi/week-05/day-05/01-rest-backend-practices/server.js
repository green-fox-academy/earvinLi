const path = require('path');

const app = require('./app');

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/doubling', (req, res) => {
  const { input } = req.query;
  if (!input) res.send({ error: 'Please provide an input!' })
  res.send({
    'received': input,
    'result': input * 2
  });
})
