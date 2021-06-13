const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const nodemailer = require("nodemailer");

app.use(express.json());
app.use(cors());

const { PORT, BACKEND_URL, GMAIL_USER, GMAIL_PASS } = process.env;
console.log(PORT);
console.log(BACKEND_URL);

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server Running...")
    }
})

app.post("/contact", (req, _res) => {
    const smtpTrans = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: GMAIL_USER,
          pass: GMAIL_PASS
        }
      })
    
    const mailOpts = {
        from: '', 
        to: GMAIL_USER,
        subject: 'New message from contact form',
        text: `${req.body.name} (${req.body.email, req.body.phoneNumber}) says: ${req.body.message}`
      }

    smtpTrans.sendMail(mailOpts, (err, res) => {
    if (err) {
        console.log(err)
    }
    else {
        res.status(201).send("Message Sent")
        console.log("Message Sent!")
    }
    })
})