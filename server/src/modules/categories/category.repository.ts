import { Injectable } from '@nestjs/common';
import { PrismaRepository } from 'src/core/prisma';

/**
 * Repository to work with database.
 */
@Injectable()
export class CategoryRepository {
    update = this.prisma.category.update;
    findUnique = this.prisma.category.findUnique;
    findMany = this.prisma.category.findMany;
    create = this.prisma.category.create;
    count = this.prisma.category.count;

    constructor(private readonly prisma: PrismaRepository) {}
}
