import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from './constants';

interface EmailData {
  from_name: string;
  from_email: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  // Send notification to business
  await emailjs.send(
    EMAIL_CONFIG.SERVICE_ID,
    EMAIL_CONFIG.TEMPLATE_IDS.CONTACT,
    {
      user_name: data.from_name,
      user_email: data.from_email,
      message: data.message,
      reply_to: data.from_email
    },
    EMAIL_CONFIG.PUBLIC_KEY
  );

  // Send confirmation to user
  await emailjs.send(
    EMAIL_CONFIG.SERVICE_ID,
    EMAIL_CONFIG.TEMPLATE_IDS.CONFIRMATION,
    {
      user_name: data.from_name,
      user_email: data.from_email,
      message: data.message,
      reply_to: EMAIL_CONFIG.BUSINESS_EMAIL
    },
    EMAIL_CONFIG.PUBLIC_KEY
  );
};