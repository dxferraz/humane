import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutReportsInput } from './user-create-without-reports.input';

@InputType()
export class UserCreateOrConnectWithoutReportsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutReportsInput, {nullable:false})
    create!: UserCreateWithoutReportsInput;
}
