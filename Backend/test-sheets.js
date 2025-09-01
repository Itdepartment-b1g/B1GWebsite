require('dotenv').config();
const { google } = require('googleapis');

async function testGoogleSheets() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: 'service_account',
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    console.log('Testing Google Sheets connection...');
    const response = await sheets.spreadsheets.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
    });
    
    console.log('✅ Connected to sheet:', response.data.properties.title);
    
    // Try to read existing data
    const readResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: 'Sheet1!A1:K10',
    });
    
    console.log('✅ Sheet data rows:', readResponse.data.values ? readResponse.data.values.length : 0);
    if (readResponse.data.values) {
      console.log('First few rows:', readResponse.data.values.slice(0, 3));
    }
    
    // Try to append test data
    console.log('Testing data append...');
    const testData = [['Test Name', 'Test Phone', 'test@email.com', 'Test Company', 'Test Region', 'Test City', 'Test Barangay', 'Test Street', 'Retail', 'Test message', new Date().toISOString()]];
    
    const appendResponse = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: 'Sheet1!A:K',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: testData,
      },
    });
    
    console.log('✅ Data appended successfully!');
    console.log('Updated range:', appendResponse.data.updates.updatedRange);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
    }
  }
}

testGoogleSheets();
