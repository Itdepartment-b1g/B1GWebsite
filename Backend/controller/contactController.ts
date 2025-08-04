import { Request, Response } from 'express';
import { ContactFormData, ApiResponse } from '../types/contact';
import emailService from '../services/emailService';
import googleSheetsService from '../services/googleSheetsService';

class ContactController {
  async submitContactForm(req: Request, res: Response): Promise<void> {
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
        const response: ApiResponse = {
          success: false,
          message: 'All fields are required',
          error: 'Missing required fields'
        };
        res.status(400).json(response);
        return;
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        const response: ApiResponse = {
          success: false,
          message: 'Invalid email format',
          error: 'Invalid email'
        };
        res.status(400).json(response);
        return;
      }

      // Create contact data object
      const contactData: ContactFormData = {
        fullName,
        contactNumber,
        email,
        companyName,
        region,
        city,
        barangay,
        streetAddress,
        businessTypes: Array.isArray(businessTypes) ? businessTypes : [businessTypes],
        message,
        submittedAt: new Date()
      };

      // Step 1: Save to Google Sheets
      const sheetsSuccess = await googleSheetsService.saveContactData(contactData);
      if (!sheetsSuccess) {
        const response: ApiResponse = {
          success: false,
          message: 'Failed to save data to database',
          error: 'Database error'
        };
        res.status(500).json(response);
        return;
      }

      // Step 2: Send thank you email to user
      const thankYouEmailSuccess = await emailService.sendThankYouEmail(email, fullName);
      if (!thankYouEmailSuccess) {
        console.warn('Failed to send thank you email to user:', email);
      }

      // Step 3: Send notification email to recipient
      const notificationEmailSuccess = await emailService.sendNotificationEmail(contactData);
      if (!notificationEmailSuccess) {
        console.warn('Failed to send notification email to recipient');
      }

      // Return success response
      const response: ApiResponse = {
        success: true,
        message: 'Thank you for your inquiry! We have received your message and will get back to you within 24-48 hours.',
        data: {
          submittedAt: contactData.submittedAt,
          emailSent: thankYouEmailSuccess
        }
      };

      res.status(200).json(response);

    } catch (error) {
      console.error('Error in submitContactForm:', error);
      const response: ApiResponse = {
        success: false,
        message: 'An error occurred while processing your request',
        error: 'Internal server error'
      };
      res.status(500).json(response);
    }
  }

  async getContactData(req: Request, res: Response): Promise<void> {
    try {
      const data = await googleSheetsService.getContactData();
      
      const response: ApiResponse = {
        success: true,
        message: 'Contact data retrieved successfully',
        data: data
      };

      res.status(200).json(response);
    } catch (error) {
      console.error('Error in getContactData:', error);
      const response: ApiResponse = {
        success: false,
        message: 'Failed to retrieve contact data',
        error: 'Internal server error'
      };
      res.status(500).json(response);
    }
  }
}

export default new ContactController(); 