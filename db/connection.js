const mysql = require('mysql');
const {
  DBHOST,
  DBUSER,
  DBPASSWORD,
  DATABASE,
  DBPORT
} = require('../config/config');

const connection = mysql.createConnection({
  host: DBHOST,
  user: DBUSER,
  password: DBPASSWORD,
  database: DATABASE,
  port: DBPORT
});

module.exports = connection;