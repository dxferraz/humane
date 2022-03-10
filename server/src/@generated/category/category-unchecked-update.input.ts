import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DonationUncheckedUpdateManyWithoutCategoryInput } from '../donation/donation-unchecked-update-many-without-category.input';
import { NecessityUncheckedUpdateManyWithoutCategoryInput } from '../necessity/necessity-unchecked-update-many-without-category.input';

@InputType()
export class CategoryUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => DonationUncheckedUpdateManyWithoutCategoryInput, {nullable:true})
    Donation?: DonationUncheckedUpdateManyWithoutCategoryInput;

    @Field(() => NecessityUncheckedUpdateManyWithoutCategoryInput, {nullable:true})
    Necessity?: NecessityUncheckedUpdateManyWithoutCategoryInput;
}
