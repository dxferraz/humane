import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DonationUpdateManyWithoutCategoryInput } from '../donation/donation-update-many-without-category.input';
import { NecessityUpdateManyWithoutCategoryInput } from '../necessity/necessity-update-many-without-category.input';

@InputType()
export class CategoryUpdateInput {

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => DonationUpdateManyWithoutCategoryInput, {nullable:true})
    Donation?: DonationUpdateManyWithoutCategoryInput;

    @Field(() => NecessityUpdateManyWithoutCategoryInput, {nullable:true})
    Necessity?: NecessityUpdateManyWithoutCategoryInput;
}
