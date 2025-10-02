export interface ContactFormData {
    fullName: string;
    contactNumber: string;
    email: string;
    companyName: string;
    region: string;
    city: string;
    barangay: string;
    streetAddress: string;
    businessTypes: string[];
    message: string;
    submittedAt: Date;
}
export interface EmailData {
    to: string;
    subject: string;
    html: string;
    text?: string;
}
export interface GoogleSheetsData {
    spreadsheetId: string;
    range: string;
    values: string[][];
}
export interface ApiResponse {
    success: boolean;
    message: string;
    data?: any;
    error?: string;
}
//# sourceMappingURL=contact.d.ts.map