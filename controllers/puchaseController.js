const crypto = require("crypto");
const db = require("../dbconfig/dbConfig");
const dateFunc = require("../timer/timeGenerator");
const sendmail = require("../mailer/purchasemailer");
const getUniqueID = () => {
  for (var i = 0; i < 5; i++)
    return Date.now() + (Math.random() * 100000).toFixed();
};

const purchaseController = (req, res) => {
  const post = {
    username: req.body.username,
    email: req.body.email,
    game: req.body.game,
    price: req.body.price,
    credential: "",
    password: "",
    purchaseid: getUniqueID(),
    time: dateFunc(),
  };
  let sql = "INSERT INTO purchases SET?";
  let query = db.query(sql, post, (err, result) => {
    sendmail(post);

    res.send(post);
  });
};
module.exports = purchaseController;
