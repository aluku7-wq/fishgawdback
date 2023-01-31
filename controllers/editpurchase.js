const db = require("../dbconfig/dbConfig");
const editPurchase = (req, res) => {
  console.log(req.body);
  let sql1 = `UPDATE purchases set credential=?,password=? WHERE purchaseId=${req.body.purchaseId}`;
  let query1 = db.query(
    sql1,
    [req.body.credential, req.body.password],
    (err, result1) => {
      res.send("activated");
    }
  );
};
module.exports = editPurchase;
