// External Dependencies
const express = require('express');

// Internal dependencies
const router = require('./router');

const app = express();
const PORT = 8082;

app.set('view engine', 'ejs');
app.use('/static', express.static('static'));
// modular route
app.use('/bookstore', router);

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}.`));
