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
  let mysqlStatement = `
    SELECT book_name, aut_name, cate_descrip, pub_name, book_price
    FROM book_mast
      JOIN author ON book_mast.aut_id = author.aut_id
      JOIN category ON book_mast.cate_id = category.cate_id
      JOIN publisher ON book_mast.pub_id = publisher.pub_id
  `;
  let queryInput = [];

  if (req.query) {
    const {
      category,
      publisher,
      plt,
      pgt
    } = req.query;

    queryInput = Object.values(req.query);

    // TODO: There must be a better way working with these?
    mysqlStatement += `
      WHERE ${category ? 'cate_descrip = ?' : ''}
      ${publisher ? `${queryInput.indexOf(publisher) !== 0 ? 'And' : ''} pub_name = ?` : ''}
      ${plt ? `${queryInput.indexOf(plt) !== 0 ? 'And' : ''} book_price <= ?` : ''}
      ${pgt ? `${queryInput.indexOf(pgt) !== 0 ? 'And' : ''} book_price >= ?` : ''}
    `;
  };

  const data = await mysqlQueryPromise(mysqlStatement, queryInput)
    .catch((err) => res.send(err));

  res.render('home', { bookList: data });
});

// Query helper
const mysqlQueryPromise = (mysqlStatement, queryInput) => new Promise((resolve, reject) => {
  mysqlConnection.query(mysqlStatement, queryInput, (err, rows) => {
    if (err) reject(err);
    resolve(rows);
  });
});

module.exports = router;
