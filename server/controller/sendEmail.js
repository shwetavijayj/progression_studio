const nodemailer = require('nodemailer');

async function sendTheMail(sendEmailData, callback) {
  let transporter = nodemailer.createTransport({
    auth: {
      user: 'your email id',
      pass: 'your password'
    }
  });

  await transporter.sendMail(
    {
      from: `xyz@gmail.com`,
      to: `${sendEmailData.email}`,
      subject: `${sendEmailData.subject}`,
      text: `${sendEmailData.content}`,
      html: `${sendEmailData.html}`
    },
    (Err, Response) => {
      if (Err) {
        callback({ 'Error in sending mail': Err });
      } else {
        callback(null, { msg: 'mail send success' });
      }
    }
  );
}

// let x = {
//   email: 'shweta.joshi@harbingergroup.com',
//   subject: 'hello',
//   text: 'hii',
//   html: '<b>hiiii</b>'
// };
// testMail(x, (err, res) => {
//   if (err) {
//     console.log('errr', err);
//   } else {
//     console.log('res', res);
//   }
// });

module.exoprts = {
  sendTheMail
};
