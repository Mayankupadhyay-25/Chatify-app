import{Resend} from 'resend';
import "dotenv/config"

export const resendClient = new Resend (process.env.RESEND_AOI_KEY);

export const sender = {
    email: process.env.EMAIL_FROM,
    name: process.env.EMAIL_FROM_NAME,
};