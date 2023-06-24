const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handle contact form submissions
app.post('/contact', function(req, res) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'malathivenkat96@gmail.com',
      pass: 'ftbkrkvbxxwtlgqj'
    }
  });
  
  const mailOptions = {
    from: req.body.email,
    to: 'malathivenkat96@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`
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

app.listen(PORT, function() {
  console.log(`Server running on port ${PORT}`);
});
