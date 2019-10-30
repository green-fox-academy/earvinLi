const server = require('./controller.js');

const hostname = 'localhost';
const port = 8081;
server.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`));
