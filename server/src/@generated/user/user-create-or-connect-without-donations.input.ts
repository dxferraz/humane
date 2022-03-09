import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutDonationsInput } from './user-create-without-donations.input';

@InputType()
export class UserCreateOrConnectWithoutDonationsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutDonationsInput, {nullable:false})
    create!: UserCreateWithoutDonationsInput;
}
