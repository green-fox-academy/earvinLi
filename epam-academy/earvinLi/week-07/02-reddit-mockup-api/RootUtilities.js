// Query Statement Helpers
const selectLastInsertRow = 'SELECT * FROM post WHERE id = LAST_INSERT_ID()';

// MySQL Query Helper
const mysqlPromisedQuery = (mysqlConnection, queryStatement, queryInput = []) =>
  new Promise((resolve, reject) => {
    mysqlConnection.query(queryStatement, queryInput, (err, rows) => {
      return err ? reject(err) : resolve(rows);
    });
  });

  module.exports = {
    mysqlPromisedQuery,
    selectLastInsertRow,
  };
