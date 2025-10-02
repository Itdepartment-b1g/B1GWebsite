import sgMail from '@sendgrid/mail';
import { EmailData } from '../types/contact';

class SendGridService {
  constructor() {
    const apiKey = process.env.SENDGRID_API_KEY;
    if (apiKey) {
      sgMail.setApiKey(apiKey);
      console.log('✅ SendGrid service initialized');
    } else {
      console.warn('⚠️ SENDGRID_API_KEY not set - emails will not be sent');
    }
  }

  async sendEmail(emailData: EmailData): Promise<boolean> {
    try {
      if (!process.env.SENDGRID_API_KEY) {
        console.log('📧 SendGrid not configured, skipping email');
        return false;
      }

      const msg = {
        to: emailData.to,
        from: process.env.EMAIL_FROM || 'noreply@b1gcorporation.com',
        subject: emailData.subject,
        text: emailData.text,
        html: emailData.html,
      };

      await sgMail.send(msg);
      console.log('✅ Email sent successfully via SendGrid:', emailData.to);
      return true;
    } catch (error) {
      console.error('❌ SendGrid error:', error);
      return false;
    }
  }

  async sendThankYouEmail(to: string, fullName: string): Promise<boolean> {
    const emailData: EmailData = {
      to,
      subject: 'Thank You for Contacting B1G Corporation',
      text: `Dear ${fullName},\n\nThank you for reaching out to B1G Corporation. We have received your inquiry and will respond within 24-48 hours.\n\nBest regards,\nB1G Corporation Team`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #472160;">Thank You for Contacting B1G Corporation</h2>
          <p>Dear ${fullName},</p>
          <p>Thank you for reaching out to B1G Corporation. We have received your inquiry and will respond within 24-48 hours.</p>
          <p>If you have any urgent questions, please feel free to call us.</p>
          <br>
          <p>Best regards,<br><strong>B1G Corporation Team</strong></p>
        </div>
      `,
    };

    return this.sendEmail(emailData);
  }

  async sendNotificationEmail(contactData: any): Promise<boolean> {
    const emailData: EmailData = {
      to: process.env.EMAIL_TO || 'contact@b1gcorporation.com',
      subject: `New Contact Form Submission - ${contactData.companyName}`,
      text: `New contact form submission:\n\nName: ${contactData.fullName}\nEmail: ${contactData.email}\nCompany: ${contactData.companyName}\nPhone: ${contactData.contactNumber}\n\nMessage:\n${contactData.message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #472160;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Full Name:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${contactData.fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${contactData.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${contactData.contactNumber}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Company:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${contactData.companyName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Location:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${contactData.streetAddress}, ${contactData.barangay}, ${contactData.city}, ${contactData.region}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Business Types:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${contactData.businessTypes.join(', ')}</td>
            </tr>
          </table>
          <h3>Message:</h3>
          <p style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #472160;">${contactData.message}</p>
        </div>
      `,
    };

    return this.sendEmail(emailData);
  }
}

export default new SendGridService();

