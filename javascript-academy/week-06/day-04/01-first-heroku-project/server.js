require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT;
const server = express();

server.get('/greeting', (req, res) => {
  greetingCount++;
  const name = req.query.name || 'World';
  res.json({
    greetCount: greetingCount,
    content: `Hello ${name}!`,
  });
});

server.listen(PORT, () => console.log(`Server running at ${PORT}`));

let greetingCount = 0;
