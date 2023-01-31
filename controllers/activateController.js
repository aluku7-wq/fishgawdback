const db = require("../dbconfig/dbConfig");
const activateController = (req, res) => {
  const Uid = req.body.id;
  let sql = `SELECT * FROM users WHERE Uid=?`;
  let query = db.query(sql, [Uid], (err, result) => {
    if (result.length < 1) {
      return res.status(202).json({
        status: "takenError",
        error: "nill",
      });
    } else {
      let sql1 = `UPDATE users set status='active' WHERE Uid=?`;
      let query1 = db.query(sql1, [Uid], (err, result1) => {
        res.send("activated");
      });
    }
  });
};
module.exports = activateController;
