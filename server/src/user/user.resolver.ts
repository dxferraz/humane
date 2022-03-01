import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import {
  IMutation,
  IQuery,
  User,
  UserCreateInput,
  UserUpdateInput,
} from 'src/graphql_types';
import { UserService } from './user.service';
import { Role } from '@prisma/client';

@Resolver()
export class UserResolver implements IQuery, IMutation {
  constructor(private userService: UserService) {}

  @Mutation()
  async createUser(
    @Args('user') user: UserCreateInput,
  ): Promise<UserCreateInput> | null {
    try {
      const { name, email, birthdate, role } =
        await this.userService.createUser({
          ...user,
          createdAt: new Date(),
          birthdate: new Date(user.birthdate),
          password: await this.userService.createHash(user.password),
          role: Role.USER,
        });

      return { name, email, birthdate, role };
    } catch (e) {
      throw new Error('Hash Error' + e);
    }
  }

  @Mutation()
  updateUser(user: UserUpdateInput): User | Promise<User> {
    throw new Error('Method not implemented.');
  }

  @Mutation()
  deleteUser(id: number): User | Promise<User> {
    throw new Error('Method not implemented.');
  }

  @Query()
  user(@Args('id') id: number): User | Promise<User> {
    return this.userService.getUserByID(id);
  }

  @Query()
  users(): User[] | Promise<User[]> {
    throw new Error('Method not implemented.');
  }
}
