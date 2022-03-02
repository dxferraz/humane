import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import {
  IMutation,
  IQuery,
  User,
  UserCreateInput,
  UserPublic,
  UserUpdateInput,
} from 'src/graphql_types';
import { UserService } from './user.service';
import { Role } from '@prisma/client';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';

@Resolver()
export class UserResolver implements IQuery, IMutation {
  constructor(private userService: UserService) {}

  @Mutation()
  async createUser(
    @Args('user') user: UserCreateInput,
  ): Promise<UserPublic> | null {
    try {
      const { name, email, birthdate } = await this.userService.createUser({
        ...user,
        createdAt: new Date(),
        modifiedAt: new Date(),
        birthdate: new Date(user.birthdate),
        password: await this.userService.createHash(user.password),
        role: Role.USER,
      });

      return { name, email, birthdate };
    } catch (e) {
      return e;
    }
  }

  @Mutation()
  updateUser(user: UserUpdateInput): UserPublic | Promise<UserPublic> {
    throw new Error('Method not implemented.');
  }

  @Mutation()
  deleteUser(id: number): UserPublic | Promise<UserPublic> {
    throw new Error('Method not implemented.');
  }

  @Query()
  @UseGuards(GqlAuthGuard)
  whoAmI(@CurrentUser() user): User | Promise<User> {
    // Return the user who sent the request
    return user;
  }
}
