const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');
const server = express();
// server.use(cors());
server.use(bodyParser.json());
var cors = require("cors");
server.use(cors());

// server running or not
server.listen(3000, () => {
    console.log("server running 3000");
});

//send contactform mail
server.post("/contact/mail", (req, res) => {
    console.log(req.body);
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'malathivenkat96@gmail.com',
            pass: 'ftbkrkvbxxwtlgqj'
        }
    });

    const mailOptions = {
        from: req.body.email,
        to: 'vigneshwaran25597@gmail.com',
        subject: 'New Contact Form Submission',
        text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nAdults: ${req.body.adult}\nKids:${req.body.kids}\nArrival Date:${req.body.arrival}\nDeparture Date:${req.body.departure}`
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully');
        }
    });

});