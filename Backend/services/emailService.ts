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

    // Try port 465 (SSL) which is more reliable on Render
    const useSSL = process.env.EMAIL_PORT === '465';
    
    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '465'),
      secure: useSSL, // true for 465, false for 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
        ciphers: 'SSLv3'
      },
      connectionTimeout: 30000, // 30 seconds
      greetingTimeout: 20000,
      socketTimeout: 60000, // 60 seconds
      pool: true, // Use connection pooling
      maxConnections: 5,
      maxMessages: 10,
      rateLimit: 5 // 5 emails per second max
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
    // More compatible HTML email template (inline styles for better email client support)
    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #472160, #FF9BFF); padding: 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px;">Thank You for Your Inquiry!</h1>
              <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 16px;">B1G Corporation</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="margin: 0 0 20px 0; font-size: 16px; color: #333333;">Dear <strong style="color: #472160;">${userName}</strong>,</p>
              
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #333333;">
                Thank you for reaching out to B1G Corporation! We have received your inquiry and appreciate your interest in becoming a partner with us.
              </p>
              
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #333333;">
                Our team is currently reviewing your information and will get back to you within <strong style="color: #472160;">24-48 hours</strong> with a detailed response.
              </p>
              
              <p style="margin: 0 0 10px 0; font-size: 16px; color: #333333;">
                In the meantime, if you have any urgent questions, please don't hesitate to contact us directly at:
              </p>
              
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 20px 0;">
                <tr>
                  <td style="padding: 15px; background-color: #f9f9f9; border-left: 4px solid #472160; border-radius: 5px;">
                    <p style="margin: 0 0 10px 0; font-size: 14px; color: #333333;">
                      <strong style="color: #472160;">Email:</strong> b1gcorporationofficial@gmail.com
                    </p>
                    <p style="margin: 0; font-size: 14px; color: #333333;">
                      <strong style="color: #472160;">Phone:</strong> +639690743506
                    </p>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #333333;">
                We look forward to the possibility of working together!
              </p>
              
              <p style="margin: 0; font-size: 16px; color: #333333;">
                Best regards,<br>
                <strong>The B1G Corporation Team</strong>
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 20px; background-color: #f9f9f9; text-align: center; border-top: 1px solid #eeeeee;">
              <p style="margin: 0 0 10px 0; font-size: 12px; color: #666666;">
                This is an automated message. Please do not reply to this email.
              </p>
              <p style="margin: 0; font-size: 12px; color: #666666;">
                B1G Corporation | 12 Lopez Building, Romulo Street, Poblacion A 2306 Camiling Tarlac, Philippines
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    const text = `Dear ${userName},

Thank you for reaching out to B1G Corporation! We have received your inquiry and appreciate your interest in becoming a partner with us.

Our team is currently reviewing your information and will get back to you within 24-48 hours with a detailed response.

In the meantime, if you have any urgent questions, please don't hesitate to contact us directly at:

Email: b1gcorporationofficial@gmail.com
Phone: +639690743506

We look forward to the possibility of working together!

Best regards,
The B1G Corporation Team

---
This is an automated message. Please do not reply to this email.
B1G Corporation | 12 Lopez Building, Romulo Street, Poblacion A 2306 Camiling Tarlac, Philippines`;

    const emailData: EmailData = {
      to: userEmail,
      subject: 'Thank You for Your Inquiry - B1G Corporation',
      html: html,
      text: text
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