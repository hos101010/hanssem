require('dotenv').config();
const mysql = require('mysql2');

const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
};

const pool = mysql.createPool(dbConfig);

function getConnection(callback) {
  pool.getConnection((err, conn) => {
    if (!err) callback(conn);
    else console.log(err);
  });
}

module.exports = getConnection;
