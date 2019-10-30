const url = require('url');

exports.moviesGetRequest = (req, res, param) => {
  const reqUrl = url.parse(req.url, true);
  let response = movieData;

  if (reqUrl.query.genre) response = response.filter(item => item.genre.includes(reqUrl.query.genre));
  if (param) response = response.filter(item => item.id === param);

  res.statusCode = 200;
  res.setHeader('Content-type', 'application/json');
  res.end(JSON.stringify(response));
};

exports.moviesDeleteRequest = (req, res, param) => {
  const reqUrl = url.parse(req.url, true);

  if (!req.headers.authorization || req.headers.authorization !== 'top-secret') {
    res.statusCode = 403;
    // TODO: Check the return
    res.end();
  }

  if (param) {
    if (!movieData.find(item => item.id === param)) return res.statusCode = 204;
    movieData = movieData.filter(item => item.id !== param);
    res.statusCode = 204;
  }
  else {
    movieData = [];
    res.statusCode = 204;
  }
  res.end();
};

exports.moviesPostRequest = (req, res) => {
  if (!req.headers.authorization || req.headers.authorization !== 'top-secret') {
    res.statusCode = 403;
    // TODO: Check the return
    res.end();
  }

  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', () => {
    const postBody = JSON.parse(body);

    if (!postBody.hasOwnProperty('title')) {
      res.statusCode = 400;
      // TODO: Check the return
      return res.end();
    }
    if (movieData.find(item => item.title === postBody.title)) {
      res.statusCode = 409;
      // TODO: Check the return
      return res.end();
    }
    if (!postBody.hasOwnProperty('genre')) postBody['genre'] = 'unknown';

    movieData.push(postBody);
    const response = { "text": `Post Request Value is ${postBody.genre}` };

    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify(response));
  });
};

exports.moviesPutRequest = (req, res, param) => {
  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', () => {
    const postBody = JSON.parse(body);

    if (!postBody.hasOwnProperty('id')
      || !postBody.hasOwnProperty('title')
      || !postBody.hasOwnProperty('genre')
      || postBody.id !== param
    ) {
      res.statusCode = 400;
      res.end();
    } else if (!movieData.find(item => item.id === param)) {
      res.statusCode = 404;
      res.end();
    } else {
      movieData[param - 1] = {
        id: postBody.id,
        title: postBody.title,
        genre: postBody.genre,
      };
      res.statusCode = 200;
      res.setHeader('Content-type', 'application/json');
      res.end(JSON.stringify(postBody));
    }
  });
};

exports.invalidRequest = (req, res) => {
  res.statusCode = 404;
  res.setHeader('Content-type', 'text/plain');
  res.end('Invalid Request');
};

let movieData = [
  { id: 1, title: 'New World', genre: ['thriller', 'drama'] },
  { id: 2, title: 'Cloud Atlas', genre: ['drama', 'fantasy'] },
  { id: 3, title: 'The Final Master', genre: ['drama', 'action'] },
];
