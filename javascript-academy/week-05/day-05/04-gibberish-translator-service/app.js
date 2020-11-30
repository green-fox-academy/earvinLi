const express = require('express');

const app = express();
app.use(express.static('assets'));
app.use(express.json());

app.listen(8080, () => console.log('Server started on 8081.'));

module.exports = app;
