// External Dependencies
const PostDeleteRouter = require('express').Router();

// Internal Dependencies
const mysqlConnection = require('../Database');
const {
  mysqlPromisedQuery,
  selectLastInsertRow,
} = require('../RootUtilities');

// DELETE endpoint to delete a post
PostDeleteRouter.delete('/:id', async (req, res) => {
  const idFromParams = parseInt(req.params.id);
  const queryInput = [ idFromParams ];
  const queryStatement = `DELETE FROM post WHERE id = ?`;

  const postToDelete = await mysqlPromisedQuery(mysqlConnection, 'SELECT * FROM post WHERE id = ?', queryInput)
    .catch((err) => res.status(500).end(err));

  await mysqlPromisedQuery(mysqlConnection, queryStatement, queryInput)
    .catch((err) => res.status(500).end(err));

  res.send(postToDelete);
});

module.exports = PostDeleteRouter;
