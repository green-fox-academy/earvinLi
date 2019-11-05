// External Dependencies
require('dotenv').config();
const mysql = require('mysql');

// MySQL Connection Configuration
const mysqlConnection = mysql.createConnection({
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
});

module.exports = mysqlConnection;
