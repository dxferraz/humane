import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, Matches, MinLength, Validate } from 'class-validator';
import { emailValidator, passwordValidation } from '../validators/regex';

import { UserExistsValidator } from '../validators/user-exists.validator';

/**
 * Input type for create user mutation.
 */
@InputType()
export class UserCreateInput {
    @IsNotEmpty()
    @IsEmail(undefined, { message: emailValidator.message })
    @Field(() => String, { nullable: false })
    @Validate(UserExistsValidator)
    email: string;

    @IsNotEmpty()
    @MinLength(3)
    @Field(() => String, { nullable: false })
    name: string;

    @IsNotEmpty()
    @Matches(passwordValidation.pattern, {
        message: passwordValidation.message,
    })
    @Field(() => String, { nullable: false })
    password: string;
}
