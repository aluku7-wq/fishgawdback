const db = require("../dbconfig/dbConfig");

const fetchAll = (req, res) => {
  let sql = `SELECT * FROM purchases`;
  let query = db.query(sql, (err, result) => {
    res.send(result);
  });
};
module.exports = fetchAll;
