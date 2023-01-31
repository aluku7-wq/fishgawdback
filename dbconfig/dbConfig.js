const mysql = require("mysql");
const dbConfig = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "game",
});
module.exports = dbConfig;
