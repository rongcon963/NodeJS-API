const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || "3306",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "nodejs_api"
});

module.exports = db