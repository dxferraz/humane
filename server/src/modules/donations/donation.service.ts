import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { parsePaginationArgs } from 'prisma-cursor-pagination';
import { DonationRepository } from './donation.repository';

@Injectable()
export class DonationService {
    findUnique = this.repository.findUnique;
    findMany = this.repository.findMany;

    constructor(private readonly repository: DonationRepository) {}

    async getDonations(take: number, cursor?: Prisma.DonationWhereUniqueInput) {
        const { findManyArgs, toConnection } = parsePaginationArgs({
            first: take,
            //@ts-ignore
            after: cursor ? cursor.id : undefined,
        });

        //@ts-ignore
        const donations = await this.findMany(findManyArgs);

        //@ts-ignore
        return toConnection(donations);
    }
}
