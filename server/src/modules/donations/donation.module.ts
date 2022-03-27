import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/core/prisma';
import { CategoryRepository } from '../categories/category.repository';
import { CategoryService } from '../categories/category.service';
import { ImageRepository } from '../images/images.repository';
import { ImageService } from '../images/images.service';
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
        CategoryService,
        CategoryRepository,
        UserService,
        UserRepository,
        ImageService,
        ImageRepository,
    ],
})
export class DonationModule {}
