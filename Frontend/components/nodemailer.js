"use strict";
const nodemailer = require("nodemailer");

const sendEmailAsync = async (sender, subject, message, html) => {
  try {
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: sender, // sender address
      to: "brendenking17@gmail.com", // list of receivers
      subject: subject, // Subject line
      text: message, // plain text body
      html: html, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = sendEmailAsync;
