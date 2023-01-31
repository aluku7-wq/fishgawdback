const db = require("../dbconfig/dbConfig");
const loginController = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (!req.body.username) {
    return res.status(202).json({
      status: "emptyError",
      error: "username cannot be empty",
    });
  }
  if (!req.body.password) {
    return res.status(202).json({
      status: "emptyError",
      error: "password cannot be empty",
    });
  }
  let sql = `SELECT * FROM users WHERE username=? AND password =?`;
  let query = db.query(sql, [username, password], (err, result) => {
    if (result.length < 1) {
      return res.status(202).json({
        status: "invalidError",
        error: "invalid username or password",
      });
    } else if (result[0].status == "") {
      return res.status(202).json({
        status: "notactiveError",
        error:
          "your account is not active! please visit your email and activate your account",
      });
    }

    return res.status(200).send(result);
  });
};
module.exports = loginController;
