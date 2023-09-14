// __ Importing qrcode __ \\
const QRCode = require('qrcode');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    
    QRCode.toString('Encode this text in QR code', {
        errorCorrectionLevel: 'H',
        type: 'svg'
    }, function(err, data) {
        if (err) throw err;
        res.send(data);
    });
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

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
 
