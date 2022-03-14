import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { emailValidator } from '../validators/regex';

/**
 * Input type for create user mutation.
 */
@InputType()
export class ForgotPasswordInput {
    @IsNotEmpty()
    @IsEmail(undefined, { message: emailValidator.message })
    @Field(() => String, { nullable: false })
    email: string;
}
