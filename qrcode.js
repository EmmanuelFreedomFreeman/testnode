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
        console.log(data);
    });
})
