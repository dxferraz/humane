import { Injectable } from '@nestjs/common';
import { PrismaRepository } from 'src/core/prisma';

/**
 * Repository to work with database.
 */
@Injectable()
export class ImageRepository {
    update = this.prisma.image.update;
    findUnique = this.prisma.image.findUnique;
    findMany = this.prisma.image.findMany;
    create = this.prisma.image.create;
    count = this.prisma.image.count;

    constructor(private readonly prisma: PrismaRepository) {}
}
