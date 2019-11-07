// External Dependencies
const PostPutRouter = require('express').Router();

// Internal Dependencies
const mysqlConnection = require('./Database');
const { mysqlPromisedQuery } = require('./RootUtilities');

// PUT Endpoint to find a post by its id and upvote or downvote its score
PostPutRouter.put('/:id', async (req, res) => {
  const idFromParams = parseInt(req.params.id);
  const { opinion } = req.query;
  const queryInput = [ idFromParams ];
  let queryStatement;

  if (opinion) {
    queryStatement = `
      UPDATE post
      SET score = score ${opinion === 'upvote' ? '+ 1' : '- 1'}
      WHERE id = ?
    `;
  } else {
    const { title, url } = req.body;
    console.log(title, url);
    queryStatement = `
      UPDATE post
      SET title = '${title}', url = '${url}'
      WHERE id = ?
    `;
  }
  console.log(queryStatement);

  await mysqlPromisedQuery(mysqlConnection, queryStatement, queryInput)
    .catch((err) => res.status(500).end(err));

  const putPost = await mysqlPromisedQuery(mysqlConnection, 'SELECT * FROM post WHERE id = ?', queryInput)
    .catch((err) => res.status(500).end(err));

  res.send(putPost);
});

module.exports = PostPutRouter;
