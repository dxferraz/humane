import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/core/prisma';
import { DonationRepository } from './donation.repository';
import { DonationResolver } from './donation.resolver';
import { DonationService } from './donation.service';

@Module({
    imports: [PrismaModule],
    providers: [DonationService, DonationResolver, DonationRepository],
})
export class DonationModule {}
