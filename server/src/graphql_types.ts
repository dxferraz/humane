import { Role } from '@prisma/client';
import { IsEmail, IsEmpty, IsNotEmpty, MinLength } from 'class-validator';

export class UserCreateInput {
  @IsEmail()
  email: string;

  @MinLength(3)
  @IsNotEmpty()
  name: string;

  @MinLength(6)
  @IsNotEmpty()
  password?: string;

  @IsEmpty()
  createdAt?: DateTime;

  @IsEmpty()
  role: Role;

  birthdate: DateTime;
}

export class UserUpdateInput {
  email?: Nullable<string>;
  name?: Nullable<string>;
  role?: Nullable<Role>;
  birthdate?: Nullable<DateTime>;
  password?: Nullable<string>;
}

export abstract class IQuery {
  abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;

  abstract users(): User[] | Promise<User[]>;
}

export abstract class IMutation {
  abstract createUser(
    user: UserCreateInput,
  ): Nullable<UserCreateInput> | Promise<Nullable<UserCreateInput>>;

  abstract updateUser(
    user: UserUpdateInput,
  ): Nullable<User> | Promise<Nullable<User>>;

  abstract deleteUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
  id: number;
  email: string;
  name: string;
  role: Role;
  birthdate?: DateTime;
  verified?: Nullable<boolean>;
}

export type DateTime = any;
type Nullable<T> = T | null;
