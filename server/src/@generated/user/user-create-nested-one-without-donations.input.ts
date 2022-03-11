import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDonationsInput } from './user-create-without-donations.input';
import { UserCreateOrConnectWithoutDonationsInput } from './user-create-or-connect-without-donations.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutDonationsInput {

    @Field(() => UserCreateWithoutDonationsInput, {nullable:true})
    create?: UserCreateWithoutDonationsInput;

    @Field(() => UserCreateOrConnectWithoutDonationsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutDonationsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
