import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutReportsInput } from './user-update-without-reports.input';
import { UserCreateWithoutReportsInput } from './user-create-without-reports.input';

@InputType()
export class UserUpsertWithoutReportsInput {

    @Field(() => UserUpdateWithoutReportsInput, {nullable:false})
    update!: UserUpdateWithoutReportsInput;

    @Field(() => UserCreateWithoutReportsInput, {nullable:false})
    create!: UserCreateWithoutReportsInput;
}
