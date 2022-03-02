import { Role } from '@prisma/client';
import {
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UserCreateInput {
  @IsEmail()
  email: string;

  @MinLength(3)
  @MaxLength(20)
  @IsNotEmpty()
  name: string;

  /*  
      Passwords will contain at least 6 characters
      Passwords will contain at least 1 upper case letter
      Passwords will contain at least 1 lower case letter
      Passwords will contain at least 1 number or special character
  */
  @MinLength(6)
  @MaxLength(30)
  @IsNotEmpty()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: "Password doesn't match the criteria required.",
  })
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
  abstract whoAmI(user: User): Nullable<User> | Promise<Nullable<User>>;
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
