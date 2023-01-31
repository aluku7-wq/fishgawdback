const mailer = require("nodemailer");
const purchaseMailing = (post) => {
  const transporter = mailer.createTransport({
    service: "gmail",
    auth: {
      user: "",
      pass: "app password",
    },
  });
  const details = {
    from: "",
    to: "",
    subject: "FISHGAWD GAME PAYMENT",
    text: ``,
    html: `<div>confirm if the following payment has made to your cash app </div>
            <br/> 
            <div style="display:flex;gap:24px;">
            <p style="font-weight:bold">USERNAME-</p> <p>${post.username}</p>
            </div> 
            <div style="display:flex;gap:24px;">
            <p style="font-weight:bold">AMOUNT-</p> <p>${post.price}</p>
            </div>
            <div style="display:flex;gap:24px;">
            <p style="font-weight:bold">DATE-</p><p>${post.time}</p>
            </div> 
            <div style="display:flex;gap:24px;">
            <p style="font-weight:bold">PURCHASES-</p> <p>${post.purchaseid}</p>
            </div>
           `,
  };

  return transporter.sendMail(details, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("mail sent");
    }
  });
};
module.exports = purchaseMailing;
