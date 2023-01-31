const express = require("express");
const app = express();
const cors = require("cors");
const mailer = require("nodemailer");
const db = require("./dbconfig/dbConfig");
// import controllers
const signupController = require("./controllers/signupController");
const loginController = require("./controllers/loginController");
const activateController = require("./controllers/activateController");
const purchaseController = require("./controllers/puchaseController");
const fetchPurchase = require("./controllers/purchasedGame");
const fetchAll = require("./controllers/fetchAllController");
const editPurchase = require("./controllers/editpurchase");

app.use(cors());
app.use(express.json());

// create connection
db.connect((err) => {
  if (err) console.log(err);
  console.log("connected");
});

// register user
app.post("/", signupController);
// activate account
app.post("/update", activateController);

// login user
app.post("/fetch", loginController);
// initiate purchase
app.post("/purchase", purchaseController);

// fetch purchased games
app.post("/games", fetchPurchase);
// fetch all games
app.post("/fetchall", fetchAll);
// update payment
app.post("/payupdate", editPurchase);

app.listen(4000, () => {
  console.log("app running on port 4000");
});
