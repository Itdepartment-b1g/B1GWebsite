import { EmailData } from '../types/contact';
declare class EmailService {
    private transporter;
    private initializeTransporter;
    constructor();
    sendEmail(emailData: EmailData): Promise<boolean>;
    sendThankYouEmail(userEmail: string, userName: string): Promise<boolean>;
    sendNotificationEmail(contactData: any): Promise<boolean>;
}
declare const _default: EmailService;
export default _default;
//# sourceMappingURL=emailService.d.ts.map