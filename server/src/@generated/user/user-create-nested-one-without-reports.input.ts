import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReportsInput } from './user-create-without-reports.input';
import { UserCreateOrConnectWithoutReportsInput } from './user-create-or-connect-without-reports.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutReportsInput {

    @Field(() => UserCreateWithoutReportsInput, {nullable:true})
    create?: UserCreateWithoutReportsInput;

    @Field(() => UserCreateOrConnectWithoutReportsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutReportsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
