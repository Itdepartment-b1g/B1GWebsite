import { ContactFormData } from '../types/contact';
declare class GoogleSheetsService {
    private sheets;
    private spreadsheetId;
    private initialized;
    constructor();
    private initialize;
    saveContactData(contactData: ContactFormData): Promise<boolean>;
    getContactData(): Promise<any[]>;
}
declare const _default: GoogleSheetsService;
export default _default;
//# sourceMappingURL=googleSheetsService.d.ts.map