import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DonationWhereUniqueInput } from './donation-where-unique.input';
import { DonationCreateWithoutCategoryInput } from './donation-create-without-category.input';

@InputType()
export class DonationCreateOrConnectWithoutCategoryInput {

    @Field(() => DonationWhereUniqueInput, {nullable:false})
    where!: DonationWhereUniqueInput;

    @Field(() => DonationCreateWithoutCategoryInput, {nullable:false})
    create!: DonationCreateWithoutCategoryInput;
}
