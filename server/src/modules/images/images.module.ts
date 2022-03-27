import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/core/prisma';
import { UserRepository } from '../user/user.repository';
import { UserService } from '../user/user.service';
import { ImageRepository } from './images.repository';
import { ImageService } from './images.service';

@Module({
    imports: [PrismaModule],
    providers: [ImageService, ImageRepository],
})
export class ImageModule {}
