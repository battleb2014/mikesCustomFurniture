const express = require('express');
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');
const cors = require('cors');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.get('/', () => {
    res.send('welcome to my form');
})

app.post('/api/form', (req, res) => {

    let data = req.body;

    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: 'mikescustomfurnitureandmore@gmail.com',
            pass: "letsgetit20"
        }
    });


    let mailOptions = {
        from: data.email,
        to: 'mikescustomfurnitureandmore@gmail.com',
        subject: `Message from ${data.name}`,
        html: `
    
    <h3>Information</h3>
    <ul>
      <li>Name: ${data.name}</li>
      <li>Email: ${data.email}</li>
    
    </ul> 
    <h3>Message</h3> 
    <p>${data.message}</p>  
    
    `

    };

    transporter.sendMail(mailOptions, (error, response) => {

        if (error) {
            res.send(error)
        }
        else {
            res.send('Success')
        }

        smtpTransport.close();
    })





})


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`server listening at port ${PORT}`);

})