import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DonationCreateNestedManyWithoutCategoryInput } from '../donation/donation-create-nested-many-without-category.input';

@InputType()
export class CategoryCreateWithoutNecessityInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => DonationCreateNestedManyWithoutCategoryInput, {nullable:true})
    Donation?: DonationCreateNestedManyWithoutCategoryInput;
}
