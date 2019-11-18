/* eslint-disable no-console */
const nodemailer = require('nodemailer');
const { config } = require('../config');

class Email {
  constructor() {
    this.transport = nodemailer.createTransport({
      host: config.mailHost,
      port: config.mailPort,
      secureConnection: config.mailStarttlsEnable,
      tls: {
        ciphers:'SSLv3'
      },
      auth: {
        user: config.mailUsername,
        pass: config.mailPassword
      }
    });
  }

  sendEmail(mailOptions) {
    this.transport.sendMail(mailOptions, (error, response) => {
      if (error) {
        console.error(`Error email message: ${error}`);
      } else {
        console.log(`Message sent: ${response}`);
      }
      this.transport.close();
    });
  }
}

module.exports = Email;
