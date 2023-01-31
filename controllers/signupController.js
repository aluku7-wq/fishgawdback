const sendmail = require("../mailer/mailer");
const db = require("../dbconfig/dbConfig");
const getUniqueID = () => {
  for (var i = 0; i < 5; i++)
    return Date.now() + (Math.random() * 100000).toFixed();
};

const signupController = (req, res) => {
  let post = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    Uid: getUniqueID(),
  };
  if (!req.body.username) {
    return res.status(202).json({
      status: "emptyError",
      error: "username cannot be empty",
    });
  }
  if (!req.body.email) {
    return res.status(202).json({
      status: "emptyError",
      error: "email cannot be empty",
    });
  }
  if (!req.body.password) {
    return res.status(202).json({
      status: "emptyError",
      error: "password cannot be empty",
    });
  }
  let sql1 = `SELECT * FROM users WHERE username=?`;
  let query1 = db.query(sql1, [post.username], (err, result) => {
    if (result.length > 0) {
      return res.status(202).json({
        status: "takenError",
        error: "username already taken",
      });
    } else {
      let sql2 = "INSERT INTO users SET?";
      let query2 = db.query(sql2, post, (err2, result2) => {
        sendmail(post.Uid, post.email);
        return res.status(200).send(result2);
      });
    }
  });
};

module.exports = signupController;
