import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'db/prisma/service/prisma.service';
import { User } from 'src/graphql_types';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(user: Prisma.UserCreateInput): Promise<User> {
    return await this.prisma.user.create({
      data: { ...user },
    });
  }

  async getUserByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async getUserByID(id: number) {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
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
