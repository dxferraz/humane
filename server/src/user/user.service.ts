import * as bcrypt from 'bcrypt';
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'db/prisma/service/prisma.service';
import { User } from 'src/graphql_types';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(user: Prisma.UserCreateInput): Promise<User> {
    try {
      return await this.prisma.user.create({
        data: { ...user },
      });
    } catch (e) {
      switch (e.code) {
        // Unique constraints error
        case 'P2002':
          throw new ConflictException(
            'Email already being used!, please enter a different email.',
          );
        default:
          throw new InternalServerErrorException();
      }
    }
  }

  async updateUserByID(params: {
    id: number;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { data, id } = params;
    return this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }

  async deleteUserByID(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: {
        id,
      },
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
