import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDonationsInput } from './user-create-without-donations.input';
import { UserCreateOrConnectWithoutDonationsInput } from './user-create-or-connect-without-donations.input';
import { UserUpsertWithoutDonationsInput } from './user-upsert-without-donations.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutDonationsInput } from './user-update-without-donations.input';

@InputType()
export class UserUpdateOneRequiredWithoutDonationsInput {

    @Field(() => UserCreateWithoutDonationsInput, {nullable:true})
    create?: UserCreateWithoutDonationsInput;

    @Field(() => UserCreateOrConnectWithoutDonationsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutDonationsInput;

    @Field(() => UserUpsertWithoutDonationsInput, {nullable:true})
    upsert?: UserUpsertWithoutDonationsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutDonationsInput, {nullable:true})
    update?: UserUpdateWithoutDonationsInput;
}
