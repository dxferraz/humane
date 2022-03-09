import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DonationWhereUniqueInput } from './donation-where-unique.input';
import { DonationCreateWithoutUserInput } from './donation-create-without-user.input';

@InputType()
export class DonationCreateOrConnectWithoutUserInput {

    @Field(() => DonationWhereUniqueInput, {nullable:false})
    where!: DonationWhereUniqueInput;

    @Field(() => DonationCreateWithoutUserInput, {nullable:false})
    create!: DonationCreateWithoutUserInput;
}
