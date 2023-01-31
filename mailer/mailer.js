const mailer = require("nodemailer");
const mailing = (id, email) => {
  const transporter = mailer.createTransport({
    service: "gmail",
    auth: {
      user: "",
      pass: "",
    },
  });
  const details = {
    from: "",
    to: email,
    subject: "FISHGAWD REGISTRATION",
    text: "Thank you for registering into our services",
    html: `<p>PLEASE click the link below to confirm your email </p><br/> <a href='http://localhost:5173/auth/${id}'><button style="background:red;border:none;color:#fff;border-radius:3.5px;">activation link</button></a> `,
  };

  return transporter.sendMail(details, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("mail sent");
    }
  });
};
module.exports = mailing;
