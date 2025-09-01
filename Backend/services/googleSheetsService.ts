import { google } from 'googleapis';
import { ContactFormData } from '../types/contact';

class GoogleSheetsService {
  private sheets: any;
  private spreadsheetId: string = '';
  private initialized: boolean = false;

  constructor() {
    // Don't initialize here - do it lazily when first used
  }

  private initialize() {
    if (this.initialized) return;

    this.spreadsheetId = process.env.GOOGLE_SHEETS_ID || '';
    
    // Ensure we have the required credentials
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
      console.error('Missing Google Sheets credentials in environment variables');
      console.error('GOOGLE_SERVICE_ACCOUNT_EMAIL:', !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
      console.error('GOOGLE_PRIVATE_KEY:', !!process.env.GOOGLE_PRIVATE_KEY);
      throw new Error('Google Sheets credentials not configured');
    }
    
    // Clean and format the private key properly
    const privateKey = process.env.GOOGLE_PRIVATE_KEY
      .replace(/\\n/g, '\n')  // Replace literal \n with actual newlines
      .trim();
    
    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: 'service_account',
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    this.sheets = google.sheets({ version: 'v4', auth });
    this.initialized = true;
    console.log('✅ Google Sheets service initialized');
  }

  async saveContactData(contactData: ContactFormData): Promise<boolean> {
    this.initialize(); // Initialize lazily
    try {
      const values = [
        [
          contactData.fullName,
          contactData.contactNumber,
          contactData.email,
          contactData.companyName,
          contactData.region,
          contactData.city,
          contactData.barangay,
          contactData.streetAddress,
          contactData.businessTypes.join(', '),
          contactData.message,
          contactData.submittedAt.toISOString(),
        ],
      ];

      const response = await this.sheets.spreadsheets.values.append({
        spreadsheetId: this.spreadsheetId,
        range: 'Sheet1!A:K', // Adjust range based on your sheet structure
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        requestBody: {
          values: values,
        },
      });

      console.log('Data saved to Google Sheets:', response.data);
      return true;
    } catch (error) {
      console.error('Error saving to Google Sheets:', error);
      if (error instanceof Error) {
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
      }
      return false;
    }
  }

  async getContactData(): Promise<any[]> {
    this.initialize(); // Initialize lazily
    try {
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId: this.spreadsheetId,
        range: 'Sheet1!A:K', // Adjust range based on your sheet structure
      });

      const rows = response.data.values;
      if (!rows || rows.length === 0) {
        return [];
      }

      // Skip header row and map to objects
      const headers = rows[0];
      const data = rows.slice(1).map((row: any[]) => {
        const obj: any = {};
        headers.forEach((header: string, index: number) => {
          obj[header] = row[index] || '';
        });
        return obj;
      });

      return data;
    } catch (error) {
      console.error('Error fetching from Google Sheets:', error);
      return [];
    }
  }
}

export default new GoogleSheetsService(); 