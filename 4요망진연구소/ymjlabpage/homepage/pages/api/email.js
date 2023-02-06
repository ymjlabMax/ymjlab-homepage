// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
export default function handler(req, res) {
    if (req.method === "POST") {
        const contactInfo = {
            type: req.body.type,
            name: req.body.name,
            email: req.body.email,
            phoneNum: req.body.phone,
            title: req.body.title,
            content: req.body.content,
        };
        const qnaTemplate = dataInfo(contactInfo);
        sendEmail("sud665@ymjlab.com", contactInfo.title, qnaTemplate);
    } else {
        res.status(404).send({ message: "fail" });
    }

    return res.status(200).send({ message: "ok" });
}

const dataInfo = (data) => {
    return `<body>
                <h2>문의유형 : ${data.type}</h2>
                <h2>이름 : ${data.name}</h2>
                <h2>전화번호 : ${data.phoneNum}</h2>
                <h2>이메일 : ${data.email}</h2>
                <h2>제목 : ${data.title}</h2>
                <h2>내용 : ${data.content}</h2>
            </body>`;
};

let nodemailer = require("nodemailer");

const smtpTransport = nodemailer.createTransport({
    service: "mail",
    prot: 587,
    secure: true,
    requireTLS: true,
    requiresAuth: true,
    host: "smtp.gmail.com",
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
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
