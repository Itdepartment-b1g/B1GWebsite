import { VercelRequest, VercelResponse } from '@vercel/node';

// Import dependencies directly
const nodemailer = require('nodemailer');

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method not allowed' });
    return;
  }

  try {
    const {
      fullName,
      contactNumber,
      email,
      companyName,
      region,
      city,
      barangay,
      streetAddress,
      businessTypes,
      message
    } = req.body;

    // Validate required fields
    if (!fullName || !contactNumber || !email || !companyName || !region || !city || !barangay || !streetAddress || !businessTypes || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
        error: 'Missing required fields'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format',
        error: 'Invalid email'
      });
    }

    // Save to Google Sheets (if configured)
    if (process.env.GOOGLE_SHEETS_ID && process.env.GOOGLE_SHEETS_CREDENTIALS) {
      try {
        const { google } = require('googleapis');
        const credentials = JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS);
        
        const auth = new google.auth.GoogleAuth({
          credentials,
          scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });
        const spreadsheetId = process.env.GOOGLE_SHEETS_ID;

        await sheets.spreadsheets.values.append({
          spreadsheetId,
          range: 'Sheet1!A:K',
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [[
              new Date().toISOString(),
              fullName,
              contactNumber,
              email,
              companyName,
              region,
              city,
              barangay,
              streetAddress,
              Array.isArray(businessTypes) ? businessTypes.join(', ') : businessTypes,
              message
            ]]
          }
        });
        
        console.log('✅ Data saved to Google Sheets');
      } catch (error) {
        console.error('Google Sheets error:', error);
      }
    }

    // Send emails via SMTP
    if (process.env.EMAIL_HOST && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.EMAIL_HOST,
          port: parseInt(process.env.EMAIL_PORT || '465'),
          secure: true, // true for 465
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        // Send thank you email to user
        await transporter.sendMail({
          from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
          to: email,
          subject: 'Thank You for Contacting B1G Corporation',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #472160;">Thank You for Contacting B1G Corporation</h2>
              <p>Dear ${fullName},</p>
              <p>Thank you for reaching out to B1G Corporation. We have received your inquiry and will respond within 24-48 hours.</p>
              <p>Best regards,<br><strong>B1G Corporation Team</strong></p>
            </div>
          `,
        });

        // Send notification email to admin
        await transporter.sendMail({
          from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
          to: process.env.EMAIL_TO || process.env.EMAIL_USER,
          subject: `New Contact Form Submission - ${companyName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #472160;">New Contact Form Submission</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Full Name:</strong></td>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;">${contactNumber}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Company:</strong></td>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;">${companyName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Location:</strong></td>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;">${streetAddress}, ${barangay}, ${city}, ${region}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Business Types:</strong></td>
                  <td style="padding: 8px; border-bottom: 1px solid #ddd;">${Array.isArray(businessTypes) ? businessTypes.join(', ') : businessTypes}</td>
                </tr>
              </table>
              <h3>Message:</h3>
              <p style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #472160;">${message}</p>
            </div>
          `,
        });

        console.log('✅ Emails sent successfully');
      } catch (error) {
        console.error('Email error:', error);
      }
    }

    // Return success response
    res.status(200).json({
      success: true,
      message: 'Thank you for your inquiry! We have received your message and will get back to you within 24-48 hours.',
      data: {
        submittedAt: new Date().toISOString(),
        emailSent: true
      }
    });

  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request',
      error: 'Internal server error'
    });
  }
}

