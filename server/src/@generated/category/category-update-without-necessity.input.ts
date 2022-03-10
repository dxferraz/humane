import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DonationUpdateManyWithoutCategoryInput } from '../donation/donation-update-many-without-category.input';

@InputType()
export class CategoryUpdateWithoutNecessityInput {

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => DonationUpdateManyWithoutCategoryInput, {nullable:true})
    Donation?: DonationUpdateManyWithoutCategoryInput;
}
