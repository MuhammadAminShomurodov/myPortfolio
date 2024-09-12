// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); // For environment variables

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // To parse JSON bodies
app.use(express.json()); // To handle JSON requests

// Create a transporter object using the default SMTP transport
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify the transporter configuration
contactEmail.verify((error) => {
  if (error) {
    console.log('Error verifying email transport:', error);
  } else {
    console.log('Email transporter is ready to send');
  }
});

// Define the /contact route to handle POST requests
app.post('/contact', (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const name = `${firstName} ${lastName}`;

  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL, // Use environment variable for recipient email
    subject: 'New Contact Form Submission',
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send message' });
    }
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Message sent successfully' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
