import { Injectable } from '@nestjs/common';
import { PrismaRepository } from 'app_modules/prisma';

/**
 * Repository to work with database.
 */
@Injectable()
export class MissingPersonRepository {
    update = this.prisma.missingPerson.update;
    findUnique = this.prisma.missingPerson.findUnique;
    findMany = this.prisma.missingPerson.findMany;
    create = this.prisma.missingPerson.create;
    count = this.prisma.missingPerson.count;
    delete = this.prisma.missingPerson.delete;

    constructor(private readonly prisma: PrismaRepository) {}
}
