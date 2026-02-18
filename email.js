const nodemailer = require('nodemailer');

const sendEmail = async (email, token) => {

const transporter = nodemailer.createTransport({
    service : 'Gmail',
    auth : {
        user : process.env.EMAIL_USER,
        pass : process.env.EMAIL_PASS,
    },
});

const link = `http://localhost:3000/confirm/${token}`;

await transporter.sendMail({
    from : process.env.EMAIL_USER,
    to : email,
    subject : 'Confirm your account',
    html : `<p>Please click the following link to confirm your account: <a href="${link}">Confirm Account</a></p>`
});
};

module.exports = sendEmail;