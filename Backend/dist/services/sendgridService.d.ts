import { EmailData } from '../types/contact';
declare class SendGridService {
    constructor();
    sendEmail(emailData: EmailData): Promise<boolean>;
    sendThankYouEmail(to: string, fullName: string): Promise<boolean>;
    sendNotificationEmail(contactData: any): Promise<boolean>;
}
declare const _default: SendGridService;
export default _default;
//# sourceMappingURL=sendgridService.d.ts.map