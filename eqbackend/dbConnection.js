const mysql = require("mysql");
const color = require("colors");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "user",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log(color.bold.green("Db connected !"));
});

module.exports = db;
