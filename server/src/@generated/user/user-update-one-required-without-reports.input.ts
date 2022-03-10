import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReportsInput } from './user-create-without-reports.input';
import { UserCreateOrConnectWithoutReportsInput } from './user-create-or-connect-without-reports.input';
import { UserUpsertWithoutReportsInput } from './user-upsert-without-reports.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutReportsInput } from './user-update-without-reports.input';

@InputType()
export class UserUpdateOneRequiredWithoutReportsInput {

    @Field(() => UserCreateWithoutReportsInput, {nullable:true})
    create?: UserCreateWithoutReportsInput;

    @Field(() => UserCreateOrConnectWithoutReportsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutReportsInput;

    @Field(() => UserUpsertWithoutReportsInput, {nullable:true})
    upsert?: UserUpsertWithoutReportsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutReportsInput, {nullable:true})
    update?: UserUpdateWithoutReportsInput;
}
