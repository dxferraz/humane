import { Field, InputType } from '@nestjs/graphql';
import {
    IsEmail,
    IsNotEmpty,
    Matches,
    MaxLength,
    MinLength,
    Validate,
} from 'class-validator';
import { UserExistsValidator } from '../validators/user-exists.validator';

/**
 * Update user input type.
 */
@InputType()
export class UserUpdateInput {
    @IsNotEmpty()
    @IsEmail()
    @Field(() => String, { nullable: false })
    @Validate(UserExistsValidator)
    email: string;

    @IsNotEmpty()
    @MinLength(3)
    @Field(() => String, { nullable: false })
    name: string;

    /*
      Passwords will contain at least 6 characters
      Passwords will contain at least 1 upper case letter
      Passwords will contain at least 1 lower case letter
      Passwords will contain at least 1 number or special character
    */
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(30)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![\n.])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: "Password doesn't match the criteria required.",
    })
    @Field(() => String, { nullable: false })
    password: string;

    /*
      DD/MM/YYYY or DD-MM-YYYY
    */
    @Field(() => String, { nullable: false })
    @Matches(/^(0?[1-9]|[12]\d|3[01])[/\-](0?[1-9]|1[0-2])[/\-]\d{4}$/, {
        message: 'Birthday should follow the format DD-MM-YYYY',
    })
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
