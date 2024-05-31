import nodemailer from "nodemailer"

const sendEmail = async (option) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })

    const emailOptions = {
        from: `"Daily Quote" ${process.env.EMAIL_FROM}`,
        to: option.email,
        subject: option.subject,
        text: option.message
    }

    await transporter.sendMail(emailOptions);
    console.log('Mail sent');
}

export default sendEmail