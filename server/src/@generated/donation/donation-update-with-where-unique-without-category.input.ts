import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DonationWhereUniqueInput } from './donation-where-unique.input';
import { DonationUpdateWithoutCategoryInput } from './donation-update-without-category.input';

@InputType()
export class DonationUpdateWithWhereUniqueWithoutCategoryInput {

    @Field(() => DonationWhereUniqueInput, {nullable:false})
    where!: DonationWhereUniqueInput;

    @Field(() => DonationUpdateWithoutCategoryInput, {nullable:false})
    data!: DonationUpdateWithoutCategoryInput;
}
