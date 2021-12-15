
const mysql = require('mysql2');
const dotenv = require('dotenv').config({ path: './config/config.env' });

const connection = mysql.createConnection({
  host: process.env.HOST,
  password: process.env.PASSWORD,
  user: process.env.USERNAME,
  database: process.env.DATABASE,
  charset: 'latin1',
});

module.exports = {
  connection,
  poolConnection: connection.promise(),
};