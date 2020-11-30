const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('home', { title: 'Hello World' }));
app.listen(8081, () => console.log('Server started on 8081.'));
