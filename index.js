const twilio = require('twilio');
const client = twilio(
 'ACe782539152467ee6b5535766e5f56531',
 'ef122b28335c6c832ab169dabb03dca3'
);
/*
client.messages
 .create({
   from: 'whatsapp:+14155238886',
   to: ['whatsapp:+243995714871','whatsapp:+243971870184'],
   body: 'bonjour',
   
 })
 .then(message => {
   console.log(message.sid);
 })
 .catch(err => {
   console.error(err);
 });

*/
 // __ Importing qrcode __ \\
const QRCode = require('qrcode');

QRCode.toString('Encode this text in QR code', {
  errorCorrectionLevel: 'H',
  type: 'svg'
}, function(err, data) {
  if (err) throw err;
  return data;
});