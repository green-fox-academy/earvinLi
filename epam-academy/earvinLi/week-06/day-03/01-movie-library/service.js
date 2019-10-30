const url = require('url');

exports.moviesRequest = (req, res, param) => {
  const reqUrl = url.parse(req.url, true);
  let response = movieData;

  if (reqUrl.query.genre) {
    response = response.filter(item => item.genre.includes(reqUrl.query.genre));
  }

  if (param) {
    response = response.filter(item => item.id === parseInt(param));
  }

  res.statusCode = 200;
  res.setHeader('Content-type', 'application/json');
  res.end(JSON.stringify(response));
};

exports.testRequest = (req, res) => {
  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', () => {
    const postBody = JSON.parse(body);
    const response = { "text": `Post Request Value is ${postBody.value}` };

    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify(response));
  });
};

exports.invalidRequest = (req, res) => {
  res.statusCode = 404;
  res.setHeader('Content-type', 'text/plain');
  res.end('Invalid Request');
};

const movieData = [
  { id: 1, title: 'New World', genre: ['thriller', 'drama'] },
  { id: 2, title: 'Cloud Atlas', genre: ['drama', 'fantasy'] },
  { id: 3, title: 'The Final Master', genre: ['drama', 'action'] },
];
