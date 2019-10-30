const fakeExpress = require('./fakeExpress.js');

const app = fakeExpress();
const PORT = 8081;
app.listen(PORT, () => console.log(`Server running at ${PORT}`));
