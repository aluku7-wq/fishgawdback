const db = require("../dbconfig/dbConfig");
const fetchPurchase = (req, res) => {
  console.log(req.body.purchase.username);
  let sql = `SELECT * FROM purchases WHERE username=?`;
  let query = db.query(sql, [req.body.purchase.username], (err, result) => {
    res.send(result);
  });
};
module.exports = fetchPurchase;
