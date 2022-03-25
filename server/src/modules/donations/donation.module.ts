import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/core/prisma';
import { UserRepository } from '../user/user.repository';
import { UserService } from '../user/user.service';
import { DonationRepository } from './donation.repository';
import { DonationResolver } from './donation.resolver';
import { DonationService } from './donation.service';

@Module({
    imports: [PrismaModule],
    providers: [
        DonationService,
        DonationResolver,
        DonationRepository,
        UserService,
        UserRepository,
    ],
})
export class DonationModule {}
