// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    // sendEmail("sud665@ymjlab.com", "test", "<p>22</p><br><h1>2222</h1>");

    if (req.method === "POST") {
        const contactInfo = {
            type: req.body.type,
            name: req.body.name,
            email: req.body.email,
            phoneNum: req.body.phoneNum,
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

let dataInfo = (data) => {
    return `<body>
                <h1>문의유형 : ${data.type}</h1>
                <h2>이름 : ${data.name}</h2>
                <h2>전화번호 : ${data.phoneNum}</h2>
                <h2>이메일 : ${data.email}</h2>
                <h2>제목 : ${data.title}</h2>
                <p>내용 : ${data.content}</p>
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
