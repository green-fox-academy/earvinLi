// External Dependencies
const PostsRouter = require('express').Router();

// Internal Dependencies
const mysqlConnection = require('./Database');
const {
  mysqlPromisedQuery,
  selectLastInsertRow,
} = require('./RootUtilities');

// GET Endpoint to get all the posts
PostsRouter.get('/', async (req, res) => {
  const queryStatement = 'SELECT * FROM post';

  const fetchedPosts = await mysqlPromisedQuery(mysqlConnection, queryStatement)
    .catch((err) => res.status(500).end(err));

  res.send(fetchedPosts);
});

// POST Endpoint to add a new post
PostsRouter.post('/', async (req, res) => {
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

// DELETE Endpoint to delete a post
PostsRouter.delete('/:id', async (req, res) => {
  const idFromParams = parseInt(req.params.id);
  const queryInput = [ idFromParams ];
  const queryStatement = `DELETE FROM post WHERE id = ?`;

  const postToDelete = await mysqlPromisedQuery(mysqlConnection, 'SELECT * FROM post WHERE id = ?', queryInput)
    .catch((err) => res.status(500).end(err));

  await mysqlPromisedQuery(mysqlConnection, queryStatement, queryInput)
    .catch((err) => res.status(500).end(err));

  res.send(postToDelete);
});

module.exports = PostsRouter;
