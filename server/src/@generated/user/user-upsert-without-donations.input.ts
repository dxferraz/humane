import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutDonationsInput } from './user-update-without-donations.input';
import { UserCreateWithoutDonationsInput } from './user-create-without-donations.input';

@InputType()
export class UserUpsertWithoutDonationsInput {

    @Field(() => UserUpdateWithoutDonationsInput, {nullable:false})
    update!: UserUpdateWithoutDonationsInput;

    @Field(() => UserCreateWithoutDonationsInput, {nullable:false})
    create!: UserCreateWithoutDonationsInput;
}
