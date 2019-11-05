// External Dependencies
const Router = require('express').Router();

// Internal Dependencies
const mysqlConnection = require('./Database');
const {
  mysqlPromisedQuery,
  selectLastInsertRow,
} = require('./RootUtilities');

// GET Endpoint to get all the posts
Router.get('/', async (req, res) => {
  const queryStatement = 'SELECT * FROM post';

  const fetchedPosts = await mysqlPromisedQuery(mysqlConnection, queryStatement)
    .catch((err) => res.status(500).end(err));

  res.send(fetchedPosts);
});

// POST Endpoint to add a new post
Router.post('/', async (req, res) => {
  const {
    title,
    url,
  } = req.body;

  const queryStatementPostPost = `INSERT INTO post (title, url) VALUES ('${title}', '${url}')`;

  await mysqlPromisedQuery(mysqlConnection, queryStatementPostPost)
    .catch((err) => res.status(500).end(err));

  // TODO: Create a MySQL procedure to handle inserted data selecting
  const postedPost = await mysqlPromisedQuery(mysqlConnection, selectLastInsertRow)
    .catch((err) => res.status(500).end(err));

  res.status(201).send(postedPost);
});

// PUT Endpoint to find a post by its id and upvote or downvote its score
Router.put('/:id', async (req, res) => {
  const idFromParams = parseInt(req.params.id);
  const { opinion } = req.query;
  const queryInput = [ idFromParams ];

  const queryStatement = `UPDATE post SET score = score ${opinion === 'upvote' ? '+ 1' : '- 1'} WHERE id = ?`;

  await mysqlPromisedQuery(mysqlConnection, queryStatement, queryInput)
    .catch((err) => res.status(500).end(err));

  const postedPost = await mysqlPromisedQuery(mysqlConnection, 'SELECT * FROM post WHERE id = ?', queryInput)
    .catch((err) => res.status(500).end(err));

  res.send(postedPost);
});

module.exports = Router;
