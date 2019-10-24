const express = require('express');
const app = express();

app.use(express.static('assets'));
app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));
app.listen(8081, () => console.log('Server started on PORT 8081.'));
