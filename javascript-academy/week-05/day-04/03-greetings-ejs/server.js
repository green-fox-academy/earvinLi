const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('home', { name: req.query.name || 'Guest' }));
app.listen(8081, () => console.log('Server started on 8081.'));
