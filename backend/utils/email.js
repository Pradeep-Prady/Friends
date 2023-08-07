const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  const transport = {
    // host: process.env.SMTP_HOST,
    // port: process.env.SMTP_PORT,
    service: "gmail",
    auth: {
      // user: process.env.SMTP_USER,
      // pass: process.env.SMTP_PASS,
      user: "necnarikootam@gmail.com",
      pass: "9zNrww:HXhF4Lyt",
    },
  };

  const transporter = nodemailer.createTransport(transport);

  const message = {
    from: `${process.env.SMTP_FROM_NAME} <>${process.env.SMTP_FROM_EMAIL}`,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(message, (err,info) => {
    if (err) {
      console.log("error", err);
    }
    else{
      console.log('info', info);
    }
  });
};

module.exports = sendEmail;
