// External Dependencies
const PostGetRouter = require('express').Router();

// Internal Dependencies
const mysqlConnection = require('../Database');
const {
  mysqlPromisedQuery,
  selectLastInsertRow,
} = require('../RootUtilities');

// GET endpoint to get all the posts
PostGetRouter.get('/', async (req, res) => {
  const queryStatement = 'SELECT * FROM post';

  const fetchedPosts = await mysqlPromisedQuery(mysqlConnection, queryStatement)
    .catch((err) => res.status(500).end(err));

  res.send(fetchedPosts);
});

module.exports = PostGetRouter;
