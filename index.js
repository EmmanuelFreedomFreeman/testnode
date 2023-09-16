// __ Importing qrcode __ \\

const QRCode = require('qrcode');
const express = require('express')
const app = express();
const port = 3000


// generate a qrcode
app.get('/qrcode/:name/:tel/:id', (req, res) => {
    let qr = `
    Name : ${req?.params?.name}/Tel:${req?.params?.tel}/Code:${req?.params?.id}
    `
    QRCode.toString(qr, {
        errorCorrectionLevel: 'H',
        type: 'svg'
    }, function(err, data) {
        if (err) throw err;
        res.send(data);
    });
})

// sending a whatsapp message

app.get('/whatsapp/:name/:tel/:id', (req, res) => {
  let qr = `
  Name : ${req?.params?.name}/Tel:${req?.params?.tel}/Code:${req?.params?.id}
  `
  const accountSid = 'ACe782539152467ee6b5535766e5f56531';
const authToken = 'b04ad4e58c107726916527367e1a7a0e';
const client = require('twilio')(accountSid, authToken);
  
  client.messages
    .create({
      from: 'whatsapp:+14155238886',
      to: 'whatsapp:+243854702408',
      body: 'bonjour emma',
      
    })
    .then(message => {
      res.send(message.body);
    })
    .catch(err => {
      res.send(err);
    });
  
  
  
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


 
