import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class MailService {
    constructor(private mailerService: MailerService) {}

    async sendUserRecoverEmail(user: User, token: string) {
        const url = `example.com/auth/confirm?token=${token}`;
        console.log('email sent to to user');
        // await this.mailerService.sendMail({
        //     to: user.email,
        //     from: '"Support Team" <support@humane.help>',
        //     subject:
        //         'Somebody forgot their password! That is ok! We got you covered...',
        //     template: 'templates/recover_email',
        //     context: {
        //         name: user.name,
        //         url,
        //     },
        // });
    }

    async sendUserConfirmationEmail(user: User, token: string) {
        const url = `example.com/auth/confirm?token=${token}`;

        await this.mailerService.sendMail({
            to: user.email,
            from: '"Support Team" <support@humane.help>',
            subject: 'Welcome to Humane! Confirm your Email!',
            template: 'templates/confirmation',
            context: {
                name: user.name,
                url,
            },
        });
    }
}
