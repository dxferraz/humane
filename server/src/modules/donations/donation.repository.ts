import { Injectable } from '@nestjs/common';
import { PrismaRepository } from 'src/core/prisma';

/**
 * Repository to work with database.
 */
@Injectable()
export class DonationRepository {
    update = this.prisma.donation.update;
    findUnique = this.prisma.donation.findUnique;
    findMany = this.prisma.donation.findMany;
    create = this.prisma.donation.create;
    count = this.prisma.donation.count;

    constructor(private readonly prisma: PrismaRepository) {}
}
