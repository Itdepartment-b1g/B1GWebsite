"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const emailService_1 = __importDefault(require("../services/emailService"));
const googleSheetsService_1 = __importDefault(require("../services/googleSheetsService"));
class ContactController {
    async submitContactForm(req, res) {
        try {
            const { fullName, contactNumber, email, companyName, region, city, barangay, streetAddress, businessTypes, message } = req.body;
            // Validate required fields
            if (!fullName || !contactNumber || !email || !companyName || !region || !city || !barangay || !streetAddress || !businessTypes || !message) {
                const response = {
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
                const response = {
                    success: false,
                    message: 'Invalid email format',
                    error: 'Invalid email'
                };
                res.status(400).json(response);
                return;
            }
            // Create contact data object
            const contactData = {
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
            console.log('🔍 Attempting to save to Google Sheets:', contactData.fullName);
            const sheetsSuccess = await googleSheetsService_1.default.saveContactData(contactData);
            console.log('📊 Google Sheets save result:', sheetsSuccess);
            if (!sheetsSuccess) {
                const response = {
                    success: false,
                    message: 'Failed to save data to database',
                    error: 'Database error'
                };
                res.status(500).json(response);
                return;
            }
            // Step 2: Send thank you email to user (using SMTP)
            const thankYouEmailSuccess = await emailService_1.default.sendThankYouEmail(email, fullName);
            if (!thankYouEmailSuccess) {
                console.warn('⚠️ Failed to send thank you email to user:', email);
            }
            // Step 3: Send notification email to recipient (using SMTP)
            const notificationEmailSuccess = await emailService_1.default.sendNotificationEmail(contactData);
            if (!notificationEmailSuccess) {
                console.warn('⚠️ Failed to send notification email to recipient');
            }
            // Return success response
            const response = {
                success: true,
                message: 'Thank you for your inquiry! We have received your message and will get back to you within 24-48 hours.',
                data: {
                    submittedAt: contactData.submittedAt,
                    emailSent: thankYouEmailSuccess
                }
            };
            res.status(200).json(response);
        }
        catch (error) {
            console.error('Error in submitContactForm:', error);
            const response = {
                success: false,
                message: 'An error occurred while processing your request',
                error: 'Internal server error'
            };
            res.status(500).json(response);
        }
    }
    async getContactData(req, res) {
        try {
            const data = await googleSheetsService_1.default.getContactData();
            const response = {
                success: true,
                message: 'Contact data retrieved successfully',
                data: data
            };
            res.status(200).json(response);
        }
        catch (error) {
            console.error('Error in getContactData:', error);
            const response = {
                success: false,
                message: 'Failed to retrieve contact data',
                error: 'Internal server error'
            };
            res.status(500).json(response);
        }
    }
}
exports.default = new ContactController();
//# sourceMappingURL=contactController.js.map