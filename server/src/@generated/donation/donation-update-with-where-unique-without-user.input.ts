import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DonationWhereUniqueInput } from './donation-where-unique.input';
import { DonationUpdateWithoutUserInput } from './donation-update-without-user.input';

@InputType()
export class DonationUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => DonationWhereUniqueInput, {nullable:false})
    where!: DonationWhereUniqueInput;

    @Field(() => DonationUpdateWithoutUserInput, {nullable:false})
    data!: DonationUpdateWithoutUserInput;
}
