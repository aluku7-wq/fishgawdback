const mysql = require("mysql");
const dbConfig = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fishgawds",
});
module.exports = dbConfig;
