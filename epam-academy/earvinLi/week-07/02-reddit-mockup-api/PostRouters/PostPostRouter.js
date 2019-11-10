// External Dependencies
const PostPostRouter = require('express').Router();

// Internal Dependencies
const mysqlConnection = require('../Database');
const {
  mysqlPromisedQuery,
  selectLastInsertRow,
} = require('../RootUtilities');

// POST endpoint to add a new post
PostPostRouter.post('/', async (req, res) => {
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

module.exports = PostPostRouter;
