const transporter = require("./mail")

const sendMail = async ({
    from,
    to,
    subject,
    text,
    html
})=>{
    await transporter.sendMail({
        from,
        to,
        subject,
        text,
        html,
    });
}

const verificationMail = async({
    from,
    email,
    otp
}) => {
    await sendMail({
        from,
        to: `${email}`,
        subject: `Welcome to OPPO ${email}`,
        text: `Hi ${email}, Please confirm your email address`,
        html: `<h1>Hi ${email}, Please confirm your email address</h1><p>OTP is ${otp}</p>`,
    })
}

module.exports = {verificationMail,sendMail}