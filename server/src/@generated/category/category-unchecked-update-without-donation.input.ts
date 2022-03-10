import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NecessityUncheckedUpdateManyWithoutCategoryInput } from '../necessity/necessity-unchecked-update-many-without-category.input';

@InputType()
export class CategoryUncheckedUpdateWithoutDonationInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => NecessityUncheckedUpdateManyWithoutCategoryInput, {nullable:true})
    Necessity?: NecessityUncheckedUpdateManyWithoutCategoryInput;
}
