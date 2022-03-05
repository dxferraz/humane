import { Field, InputType } from '@nestjs/graphql';
import {
    IsEmail,
    IsNotEmpty,
    Matches,
    MaxLength,
    MinLength,
    Validate,
} from 'class-validator';
import { dateValidation, passwordValidation } from '../validators/regex';

import { UserExistsValidator } from '../validators/user-exists.validator';

/**
 * Input type for create user mutation.
 */
@InputType()
export class UserCreateInput {
    @IsNotEmpty()
    @IsEmail()
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

    @Matches(dateValidation.pattern, {
        message: dateValidation.message,
    })
    @Field(() => String, { nullable: false })
    birthdate: string;

    @MinLength(4)
    @MaxLength(30)
    @IsNotEmpty()
    @Field(() => String, { nullable: false })
    phone: string;

    //TODO: change type to GraphQLUpload
    @Field(() => String, { nullable: true })
    thumbNail: any;
}
