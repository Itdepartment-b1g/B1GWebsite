import nodemailer from 'nodemailer';
import { EmailData } from '../types/contact';

class EmailService {
  private transporter: nodemailer.Transporter | null = null;

  private initializeTransporter() {
    if (this.transporter) return;

    console.log('🔧 Initializing email service...');
    console.log('📧 EMAIL_HOST:', process.env.EMAIL_HOST);
    console.log('📧 EMAIL_USER:', process.env.EMAIL_USER);
    console.log('📧 EMAIL_PORT:', process.env.EMAIL_PORT);

    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    console.log('✅ Email service initialized');
  }

  constructor() {
    // Don't initialize here - do it lazily when first used
  }

  async sendEmail(emailData: EmailData): Promise<boolean> {
    this.initializeTransporter(); // Initialize lazily
    try {
      const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: emailData.to,
        subject: emailData.subject,
        html: emailData.html,
        text: emailData.text,
      };

      const info = await this.transporter!.sendMail(mailOptions);
      console.log('Email sent successfully:', info.messageId);
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  }

  async sendThankYouEmail(userEmail: string, userName: string): Promise<boolean> {
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Thank You for Your Inquiry</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #472160, #FF9BFF); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          .highlight { color: #472160; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You for Your Inquiry!</h1>
            <p>B1G Corporation</p>
          </div>
          <div class="content">
            <p>Dear <span class="highlight">${userName}</span>,</p>
            
            <p>Thank you for reaching out to B1G Corporation! We have received your inquiry and appreciate your interest in becoming a partner with us.</p>
            
            <p>Our team is currently reviewing your information and will get back to you within <span class="highlight">24-48 hours</span> with a detailed response.</p>
            
            <p>In the meantime, if you have any urgent questions, please don't hesitate to contact us directly at:</p>
            
            <ul>
              <li><strong>Email:</strong> b1gcorporationofficial@gmail.com</li>
              <li><strong>Phone:</strong> +639690743506</li>
            </ul>
            
            <p>We look forward to the possibility of working together!</p>
            
            <p>Best regards,<br>
            <strong>The B1G Corporation Team</strong></p>
          </div>
          <div class="footer">
            <p>This is an automated message. Please do not reply to this email.</p>
            <p>B1G Corporation | 12 Lopez Building, Romulo Street, Poblacion A 2306 Camiling Tarlac, Philippines</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const emailData: EmailData = {
      to: userEmail,
      subject: 'Thank You for Your Inquiry - B1G Corporation',
      html: html,
      text: `Dear ${userName},\n\nThank you for reaching out to B1G Corporation! We have received your inquiry and appreciate your interest in becoming a partner with us.\n\nOur team is currently reviewing your information and will get back to you within 24-48 hours with a detailed response.\n\nBest regards,\nThe B1G Corporation Team`
    };

    return this.sendEmail(emailData);
  }

  async sendNotificationEmail(contactData: any): Promise<boolean> {
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Partner Inquiry</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #472160, #FF9BFF); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0; }
          .info-item { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #472160; }
          .label { font-weight: bold; color: #472160; }
          .message-box { background: white; padding: 20px; border-radius: 5px; margin: 20px 0; border: 1px solid #ddd; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Partner Inquiry Received</h1>
            <p>B1G Corporation</p>
          </div>
          <div class="content">
            <p>A new partner inquiry has been submitted through the website contact form.</p>
            
            <div class="info-grid">
              <div class="info-item">
                <div class="label">Full Name:</div>
                <div>${contactData.fullName}</div>
              </div>
              <div class="info-item">
                <div class="label">Email:</div>
                <div>${contactData.email}</div>
              </div>
              <div class="info-item">
                <div class="label">Contact Number:</div>
                <div>${contactData.contactNumber}</div>
              </div>
              <div class="info-item">
                <div class="label">Company/Store:</div>
                <div>${contactData.companyName}</div>
              </div>
              <div class="info-item">
                <div class="label">Region:</div>
                <div>${contactData.region}</div>
              </div>
              <div class="info-item">
                <div class="label">City:</div>
                <div>${contactData.city}</div>
              </div>
              <div class="info-item">
                <div class="label">Barangay:</div>
                <div>${contactData.barangay}</div>
              </div>
              <div class="info-item">
                <div class="label">Business Types:</div>
                <div>${contactData.businessTypes.join(', ')}</div>
              </div>
            </div>
            
            <div class="message-box">
              <div class="label">Message:</div>
              <div>${contactData.message}</div>
            </div>
            
            <p><strong>Submitted at:</strong> ${new Date(contactData.submittedAt).toLocaleString()}</p>
            
            <p>Please review this inquiry and respond to the customer within 24-48 hours.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const emailData: EmailData = {
      to: process.env.RECIPIENT_EMAIL || 'b1gcorporationofficial@gmail.com',
      subject: `New Partner Inquiry from ${contactData.fullName} - ${contactData.companyName}`,
      html: html,
      text: `New partner inquiry received from ${contactData.fullName} (${contactData.email}) from ${contactData.companyName}. Please review and respond within 24-48 hours.`
    };

    return this.sendEmail(emailData);
  }
}

export default new EmailService(); 