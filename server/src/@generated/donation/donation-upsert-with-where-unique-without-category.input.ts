import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DonationWhereUniqueInput } from './donation-where-unique.input';
import { DonationUpdateWithoutCategoryInput } from './donation-update-without-category.input';
import { DonationCreateWithoutCategoryInput } from './donation-create-without-category.input';

@InputType()
export class DonationUpsertWithWhereUniqueWithoutCategoryInput {

    @Field(() => DonationWhereUniqueInput, {nullable:false})
    where!: DonationWhereUniqueInput;

    @Field(() => DonationUpdateWithoutCategoryInput, {nullable:false})
    update!: DonationUpdateWithoutCategoryInput;

    @Field(() => DonationCreateWithoutCategoryInput, {nullable:false})
    create!: DonationCreateWithoutCategoryInput;
}
