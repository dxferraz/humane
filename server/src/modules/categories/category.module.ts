import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/core/prisma';
import { CategoryRepository } from './category.repository';
import { CategoryService } from './category.service';

@Module({
    imports: [PrismaModule],
    providers: [CategoryService, CategoryRepository],
})
export class CategoryModule {}
