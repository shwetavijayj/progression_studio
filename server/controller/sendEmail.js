const sgMail = require('@sendgrid/mail');

const myKey =
  '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';
sgMail.setApiKey(myKey);
var myInfo = {
  to: 'joshi.shweta222@gmail.com',
  from: 'shweta.joshi@harbingergroup.com',
  subject: 'test 234',
  text: 'hello this is test mail',
  html: '<b>how are you?</b>'
};
// const sendTheMail = info => {
const msg = {
  to: myInfo.to,
  from: myInfo.from,
  subject: myInfo.subject,
  text: myInfo.text,
  html: myInfo.html
};
sgMail.send(msg);
// };

// sendTheMail(myInfo);

// module.exoprts = {
//   sendTheMail
// };
