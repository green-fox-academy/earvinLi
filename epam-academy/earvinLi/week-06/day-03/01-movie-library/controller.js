const http = require('http');
const url = require('url');

const getParam = (pathname) => {
  const pathnameElements = pathname.split('/');
  const param = pathnameElements[pathnameElements.length - 1];
  return param;
};

module.exports = http.createServer((req, res) => {
  const service = require('./service.js');
  const reqUrl = url.parse(req.url, true);

  // Movies Get Endpoint
  if (req.method === 'GET') {
    if (reqUrl.pathname === '/movies') {
      return service.moviesGetRequest(req, res);
    } else {
      const movieId = getParam(reqUrl.pathname);

      if (!/^\d+$/.test(movieId)) return service.invalidRequest(req, res);
      return service.moviesGetRequest(req, res, parseInt(movieId));
    }
  }
  // Movies Delete Endpoint
  else if (req.method === 'DELETE' ) {
    if (reqUrl.pathname === '/movies') {
      return service.moviesDeleteRequest(req, res);
    } else {
      const movieId = getParam(reqUrl.pathname);

      if (!/^\d+$/.test(movieId)) return service.invalidRequest(req, res);
      return service.moviesDeleteRequest(req, res, parseInt(movieId));
    }
  }
  // Movies Post Endpoint
  else if (reqUrl.pathname === '/movies' && req.method === 'POST' ) {
    service.moviesPostRequest(req, res);
  }
  // // Movies Put Endpoint
  else if (req.method === 'PUT' ) {
    const movieId = getParam(reqUrl.pathname);

    if (!/^\d+$/.test(movieId)) return service.invalidRequest(req, res);
    return service.moviesPutRequest(req, res, parseInt(movieId));
  }
  else {
    service.invalidRequest(req, res);
  }
});
