import { google } from 'googleapis';
import { ContactFormData } from '../types/contact';

class GoogleSheetsService {
  private sheets: any;
  private spreadsheetId: string;

  constructor() {
    this.spreadsheetId = process.env.GOOGLE_SHEETS_ID || '';
    
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    this.sheets = google.sheets({ version: 'v4', auth });
  }

  async saveContactData(contactData: ContactFormData): Promise<boolean> {
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
      return false;
    }
  }

  async getContactData(): Promise<any[]> {
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