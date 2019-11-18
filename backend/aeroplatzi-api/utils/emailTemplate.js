const { config } = require('../config');

const mailCreateUser = (user) => {
  const { name, email } = user;
  return {
    from: config.mailUsername,
    to: email,
    subject: 'Creación de tu cuenta AeroPlatzi',
    html: `<h3>Bienvenido ${name},</h3>
          <p>Te agradecemos por contar con nuestros servicios.</p>
    `
  };
};

const mailCreateQR = (emailTo, pathQR) => {
  return {
    from: config.mailUsername,
    to: emailTo,
    subject: 'Tu reserva a quedado agendada',
    html: `<p>Your html here</p>`,
    attachments: [{
      filename: 'qr.png',
      path: pathQR,
      cid: 'unique@nodemailer.com' //same cid value as in the html img src
    }]
  };
};

module.exports = {
  mailCreateUser,
  mailCreateQR
};
