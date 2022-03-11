import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutDonationInput } from './category-update-without-donation.input';
import { CategoryCreateWithoutDonationInput } from './category-create-without-donation.input';

@InputType()
export class CategoryUpsertWithoutDonationInput {

    @Field(() => CategoryUpdateWithoutDonationInput, {nullable:false})
    update!: CategoryUpdateWithoutDonationInput;

    @Field(() => CategoryCreateWithoutDonationInput, {nullable:false})
    create!: CategoryCreateWithoutDonationInput;
}
