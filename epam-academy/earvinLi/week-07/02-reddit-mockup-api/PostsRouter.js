// External Dependencies
const Router = require('express').Router();

// Internal Dependencies
const mysqlConnection = require('./Database');
const { mysqlPromisedQuery } = require('./RootUtilities');

Router.get('/', async (req, res) => {
  const queryStatement = 'SELECT * FROM post;';

  const fetchedPosts = await mysqlPromisedQuery(mysqlConnection, queryStatement)
    .catch((err) => res.status(500).end(err));

  res.send(fetchedPosts);
});

Router.post('/', async (req, res) => {
  const {
    title,
    url,
  } = req.body;

  const queryStatementPostPost = `INSERT INTO post (title, url) VALUES ('${title}', '${url}');`;
  const queryStatementSelectPosted = `SELECT * FROM post WHERE id = LAST_INSERT_ID();`;

  await mysqlPromisedQuery(mysqlConnection, queryStatementPostPost)
    .catch((err) => res.status(500).end(err));

  const postedPost = await mysqlPromisedQuery(mysqlConnection, queryStatementSelectPosted)
    .catch((err) => res.status(500).end(err));

  res.status(201).send(postedPost);
});

module.exports = Router;
