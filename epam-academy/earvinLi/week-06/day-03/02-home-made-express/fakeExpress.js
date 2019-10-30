// NodeJS Dependencies
const http = require('http');

module.exports = () => {
  const app = () => {};

  app.listen = (port, callback) => {
    const server = http.createServer();
    server.listen(port, 'localhost', callback);
  };

  return app;
};
