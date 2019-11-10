// External Dependencies
const PostGetRouter = require('express').Router();

// Internal Dependencies
const mysqlConnection = require('../Database');
const { mysqlPromisedQuery } = require('../RootUtilities');

// GET endpoint to get all the posts
PostGetRouter.get('/', async (req, res) => {
  const fetchedPosts = await mysqlPromisedQuery(mysqlConnection, 'SELECT * FROM post')
    .catch((err) => res.status(500).end(err));

  res.send(fetchedPosts);
});

module.exports = PostGetRouter;
