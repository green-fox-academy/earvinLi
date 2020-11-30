// External Dependencies
require('dotenv').config();
const mysql = require('mysql');

// MySQL Connection Configuration
const mysqlConnection = mysql.createConnection({
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  password: process.env.MYSQL_PASSWORD,
  user: process.env.MYSQL_USER,
});

module.exports = mysqlConnection;
