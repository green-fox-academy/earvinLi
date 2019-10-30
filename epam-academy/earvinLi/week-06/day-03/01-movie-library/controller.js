const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {
  const service = require('./service.js');
  const reqUrl = url.parse(req.url, true);

  // GET Endpoint
  if (req.method === 'GET') {
    if (reqUrl.pathname === '/movies') return service.moviesRequest(req, res);
    else {
      const pathnameElements = reqUrl.pathname.split('/');
      const movieId = pathnameElements[pathnameElements.length - 1];
      if (!/^\d+$/.test(movieId)) return service.invalidRequest(req, res);
      return service.moviesRequest(req, res, parseInt(movieId));
    }
  }
  else if (reqUrl.pathname === '/test' && req.method === 'POST' ) {
    service.testRequest(req, res);
  }
  else {
    service.invalidRequest(req, res);
  }
});
