const nodemailer = require('nodemailer');

const contactForm = async (req, res) => {
    const { email } = req.body; // Assuming the email is coming from request body

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL, // Correct the variable name here
            pass: process.env.PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Welcome',
        text: 'Welcome to our platform!', // Change the email content as needed
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.error(error);
            res.status(500).send('Failed to send email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
};

module.exports = contactForm