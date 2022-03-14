import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/core/prisma';

import { AuthModule } from '../auth/auth.module';
import { MailModule } from '../mail/mail.module';
import { UserRepository } from './user.repository';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { UserExistsValidator } from './validators/user-exists.validator';

@Module({
    imports: [PrismaModule, AuthModule, MailModule],
    providers: [UserService, UserResolver, UserRepository, UserExistsValidator],
    exports: [UserService],
})
export class UserModule {}
