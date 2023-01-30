// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    sendEmail("sud665@ymjlab.com", "test", "<p>22</p><br><h1>2222</h1>");

    // res.status(200).json({ name: "John Doe" });
}

let nodemailer = require("nodemailer");

const smtpTransport = nodemailer.createTransport({
    service: "mail",
    prot: 587,
    secure: true,
    requireTLS: true,
    requiresAuth: true,
    host: "smtp.gmail.com",
    auth: {
        user: "admin@ymjlab.com",
        pass: "vmplipuihmkbvwor",
    },
});

function sendEmail(email, title, msg) {
    const mailOptions = {
        from: "no-reply@kkultrip.com",
        to: email,
        subject: title,
        html: msg,
    };
    smtpTransport.sendMail(mailOptions, function (error, response) {
        smtpTransport.close();

        if (error) {
            console.log("Message sent : " + error + ":" + JSON.stringify(response));
        } else {
            console.log("Message sent OK");
        }
    });
}
