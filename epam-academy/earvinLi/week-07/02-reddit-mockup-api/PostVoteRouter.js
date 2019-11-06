// External Dependencies
const PostVoteRouter = require('express').Router();

// Internal Dependencies
const mysqlConnection = require('./Database');
const { mysqlPromisedQuery } = require('./RootUtilities');

// PUT Endpoint to find a post by its id and upvote or downvote its score
PostVoteRouter.put('/:id', async (req, res) => {
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

module.exports = PostVoteRouter;
