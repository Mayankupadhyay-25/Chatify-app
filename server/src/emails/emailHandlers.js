import { resendClient, sender } from "../lib/resend";

export const sendWelcomeEmail = async (email, name, clientURL) =>{
    const {data, error} = await resendClient.emails.send({
        from: `${sender.name} <{sender.email}>`,
        to: email,
        subject: "Welcome to Chatify",
        html: `<h1>Welcome to Chatify, ${name}!</h1>
        <p>Thank you for joining us.</p>
        <a href="${clientURL}">Click here to get started</a>`
    })
    }