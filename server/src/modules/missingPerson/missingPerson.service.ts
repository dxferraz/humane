import { Injectable } from '@nestjs/common';
import { MissingPerson, Prisma } from '@prisma/client';
import { MissingPersonRepository } from './missingPerson.repository';
import { MissingPersonCreateInput } from './models/missing-person-create-input';
import { MissingPersonUpdateInput } from './models/missing-person-update-input';

/**
 * Service for managing articles.
 */
@Injectable()
export class MissingPersonService {
    delete = this.repository.delete;
    findUnique = this.repository.findUnique;
    findMany = this.repository.findMany;

    constructor(private readonly repository: MissingPersonRepository) {}

    async update(args: {
        input: MissingPersonUpdateInput;
        where?: Prisma.MissingPersonWhereUniqueInput;
        missingPerson?: MissingPerson;
        include?: Prisma.MissingPersonInclude;
    }) {
        const missingPerson =
            args.missingPerson ||
            (args.where && (await this.findUnique({ where: args.where })));
        if (!missingPerson) {
            throw new TypeError(
                'Expected MissingPerson or MissingPersonWhereUniqueInput arguments',
            );
        }
        return this.repository.update({
            data: {
                ...args.input,
            },
            where: {
                id: missingPerson.id,
            },
            include: args.include,
        });
    }

    /**
     * Create report from input, user.
     */
    async create({
        input,
        author,
    }: {
        input: MissingPersonCreateInput;
        author: { id: string };
    }) {
        const data: Prisma.MissingPersonCreateInput = {
            ...input,
            reporter: {
                connect: { id: Number(author.id) },
            },
        };
        return this.repository.create({
            data,
        });
    }

    /**
     * Get count missing people by condition.
     */
    async count(where: Prisma.MissingPersonWhereInput) {
        return await this.repository.count({ where });
    }
}
