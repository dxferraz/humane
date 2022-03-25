import { Injectable } from '@nestjs/common';
import { PrismaRepository } from 'src/core/prisma';

/**
 * Repository to work with database.
 */
@Injectable()
export class UserRepository {
    update = this.prisma.user.update;
    findUnique = this.prisma.user.findUnique;
    findMany = this.prisma.user.findMany;
    create = this.prisma.user.create;
    count = this.prisma.user.count;

    constructor(private readonly prisma: PrismaRepository) {}
}
