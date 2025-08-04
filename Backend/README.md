# B1G Corporation Backend API

This is the backend API for B1G Corporation's contact form system. It handles contact form submissions, saves data to Google Sheets, and sends automated emails.

## Features

- ✅ Contact form submission handling
- ✅ Google Sheets integration for data storage
- ✅ Automated email notifications
- ✅ Thank you emails to users
- ✅ Notification emails to recipients
- ✅ Input validation
- ✅ Error handling
- ✅ CORS configuration
- ✅ TypeScript support

## Email Flow Process

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   USER INPUT    │    │  GOOGLE SHEETS  │    │  EMAIL SYSTEM   │
│                 │    │                 │    │                 │
│ • Full Name     │───▶│ • Database      │───▶│ • Thank You     │
│ • Contact #     │    │ • Store Data    │    │   Email to User │
│ • Email         │    │ • Log Inquiry   │    │ • Notification  │
│ • Company       │    │                 │    │   to Recipient  │
│ • Location      │    │                 │    │                 │
│ • Business Type │    │                 │    │                 │
│ • Message       │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Gmail account with App Password
- Google Cloud Project with Sheets API enabled
- Google Service Account

## Installation

1. **Clone the repository and navigate to backend:**
   ```bash
   cd Backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   ```bash
   cp env.example .env
   ```

4. **Configure environment variables in `.env`:**
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development

   # Email Configuration (Gmail)
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_FROM=noreply@b1gcorporation.com

   # Google Sheets Configuration
   GOOGLE_SHEETS_ID=your-google-sheets-id
   GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
   GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour Private Key Here\n-----END PRIVATE KEY-----\n"

   # Recipient Email
   RECIPIENT_EMAIL=b1gcorporationofficial@gmail.com

   # CORS Configuration
   CORS_ORIGIN=http://localhost:3000
   ```

## Setup Instructions

### 1. Gmail App Password Setup

1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Generate an App Password:
   - Go to Security → App passwords
   - Select "Mail" and your device
   - Copy the generated password
4. Use this password in `EMAIL_PASS`

### 2. Google Sheets Setup

1. **Create a Google Cloud Project:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one

2. **Enable Google Sheets API:**
   - Go to APIs & Services → Library
   - Search for "Google Sheets API"
   - Enable it

3. **Create Service Account:**
   - Go to APIs & Services → Credentials
   - Click "Create Credentials" → "Service Account"
   - Fill in details and create
   - Download the JSON key file

4. **Create Google Sheet:**
   - Create a new Google Sheet
   - Share it with your service account email (with Editor permissions)
   - Copy the Sheet ID from the URL

5. **Configure Headers:**
   Add these headers to your Google Sheet (Row 1):
   ```
   Full Name | Contact Number | Email | Company/Store | Region | City | Barangay | Street Address | Business Types | Message | Submitted At
   ```

### 3. Environment Configuration

Update your `.env` file with the actual values:

```env
EMAIL_USER=your-actual-gmail@gmail.com
EMAIL_PASS=your-app-password
GOOGLE_SHEETS_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"
```

## Running the Server

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm run build
npm start
```

### Watch Mode
```bash
npm run watch
```

## API Endpoints

### POST `/api/contact/submit`
Submit a contact form inquiry.

**Request Body:**
```json
{
  "fullName": "John Doe",
  "contactNumber": "+639690743506",
  "email": "john@example.com",
  "companyName": "Example Store",
  "region": "Region III - Central Luzon",
  "city": "Tarlac City",
  "barangay": "San Roque",
  "streetAddress": "123 Main Street",
  "businessTypes": ["Distributor", "Retailer"],
  "message": "I'm interested in becoming a partner..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your inquiry! We have received your message and will get back to you within 24-48 hours.",
  "data": {
    "submittedAt": "2024-01-15T10:30:00.000Z",
    "emailSent": true
  }
}
```

### GET `/api/contact/data`
Retrieve all contact form submissions (for admin purposes).

### GET `/health`
Health check endpoint.

## Email Templates

### Thank You Email (to User)
- Subject: "Thank You for Your Inquiry - B1G Corporation"
- Content: Professional thank you message with company contact info
- Includes "Do not reply" notice

### Notification Email (to Recipient)
- Subject: "New Partner Inquiry from [Name] - [Company]"
- Content: Detailed inquiry information in formatted HTML
- Includes all form data for easy review

## Error Handling

The API includes comprehensive error handling:
- Input validation
- Email sending failures (logged but don't break the flow)
- Google Sheets errors
- Network errors
- Proper HTTP status codes

## Security Features

- CORS configuration
- Input sanitization
- Email validation
- Environment variable protection
- Service account authentication

## Troubleshooting

### Common Issues

1. **Email not sending:**
   - Check Gmail App Password
   - Verify EMAIL_USER and EMAIL_PASS
   - Check Gmail security settings

2. **Google Sheets not working:**
   - Verify service account permissions
   - Check GOOGLE_SHEETS_ID
   - Ensure API is enabled

3. **CORS errors:**
   - Update CORS_ORIGIN in .env
   - Check frontend URL

### Logs

The server provides detailed logging:
- Email sending status
- Google Sheets operations
- API requests
- Error details

## Development

### Project Structure
```
Backend/
├── controller/          # Request handlers
├── routes/             # API routes
├── services/           # Business logic
├── types/              # TypeScript interfaces
├── server.ts           # Main server file
├── package.json        # Dependencies
└── tsconfig.json       # TypeScript config
```

### Adding New Features

1. Create new service in `services/`
2. Add controller methods in `controller/`
3. Define routes in `routes/`
4. Add TypeScript interfaces in `types/`

## License

MIT License - see LICENSE file for details. 