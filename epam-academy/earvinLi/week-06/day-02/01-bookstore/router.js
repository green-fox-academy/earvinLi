// External Dependencies
require('dotenv').config();
const mysql = require('mysql');
const router = require('express').Router();

// MySQL Configuration
const mysqlConnection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DATABASE,
});

// Home endpoint
router.get('/', async (req, res) => {
  const mysqlStatement = 'SELECT * FROM author;';

  const dataJSON = await mysqlQueryPromise(mysqlStatement)
    .catch((err) => res.send(err));

  res.send(dataJSON);
});

// Query helper
const mysqlQueryPromise = (mysqlStatement) => new Promise((resolve, reject) => {
  mysqlConnection.query(mysqlStatement, (err, rows) => {
    if (err) reject(err);
    resolve(rows);
  });
});

module.exports = router;
