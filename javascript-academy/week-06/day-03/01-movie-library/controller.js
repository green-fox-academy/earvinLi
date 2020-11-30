const http = require('http');
const url = require('url');

const getParam = (pathname) => {
  const pathnameElements = pathname.split('/');
  const param = pathnameElements[pathnameElements.length - 1];
  return param;
};

module.exports = http.createServer((req, res) => {
  const service = require('./service.js');
  const { pathname } = url.parse(req.url, true);

  // Movies endpoint with param
  if (pathname === '/movies') {
    switch (req.method) {
      case 'DELETE': service.moviesDeleteRequest(req, res); break;
      case 'POST': service.moviesPostRequest(req, res); break;
      default: service.moviesGetRequest(req, res);
    }
    // Movies endpoint without param
  } else if (pathname.startsWith('/movies')) {
    const movieId = getParam(pathname);

    if (!/^\d+$/.test(movieId)) {
      return service.invalidRequest(req, res);
    }

    switch (req.method) {
      case 'DELETE': service.moviesDeleteRequest(req, res, parseInt(movieId)); break;
      case 'PUT': service.moviesPutRequest(req, res, parseInt(movieId)); break;
      default: service.moviesGetRequest(req, res, parseInt(movieId));
    }
  } else {
    service.invalidRequest(req, res);
  }
});
