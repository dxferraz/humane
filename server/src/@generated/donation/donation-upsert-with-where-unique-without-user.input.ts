import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DonationWhereUniqueInput } from './donation-where-unique.input';
import { DonationUpdateWithoutUserInput } from './donation-update-without-user.input';
import { DonationCreateWithoutUserInput } from './donation-create-without-user.input';

@InputType()
export class DonationUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => DonationWhereUniqueInput, {nullable:false})
    where!: DonationWhereUniqueInput;

    @Field(() => DonationUpdateWithoutUserInput, {nullable:false})
    update!: DonationUpdateWithoutUserInput;

    @Field(() => DonationCreateWithoutUserInput, {nullable:false})
    create!: DonationCreateWithoutUserInput;
}
