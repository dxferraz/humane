import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { AuthService } from 'src/modules/auth/auth.service';

import { UserRepository } from './user.repository';

/**
 * Service to manage users.
 */
@Injectable()
export class UserService {
    findUnique = this.repository.findUnique;
    findMany = this.repository.findMany;

    constructor(private readonly repository: UserRepository) {}

    async update(where: Prisma.UserWhereUniqueInput, data: Prisma.UserUpdateInput) {
        return this.repository.update({ data, where });
    }

    async findByCredentials(data: { email: string; password: string }) {
        let user = await this.repository.findUnique({
            where: { email: data.email },
        });
        if (!user) {
            return null;
        }

        if (await this.validateHash(data.password, user.password!)) {
            return user;
        } else {
            return null;
        }
    }

    async findByEmail(data: { email: string }) {
        let user = await this.repository.findUnique({
            where: { email: data.email },
        });
        if (!user) {
            return null;
        }
        return user;
    }

    async findOneRandom() {
        return this.repository.randomUser();
    }

    async create(data: Prisma.UserCreateInput) {
        return this.repository.create({ data });
    }

    async reports(id: number) {
        return await this.repository
            .findUnique({
                where: { id },
            })
            .reports();
    }

    async createHash(password: string) {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        return await bcrypt.hash(password, salt);
    }

    async validateHash(password: string, hash: string) {
        return await bcrypt.compare(password, hash);
    }
}
