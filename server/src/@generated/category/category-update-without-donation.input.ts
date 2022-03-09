import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NecessityUpdateManyWithoutCategoryInput } from '../necessity/necessity-update-many-without-category.input';

@InputType()
export class CategoryUpdateWithoutDonationInput {

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => NecessityUpdateManyWithoutCategoryInput, {nullable:true})
    Necessity?: NecessityUpdateManyWithoutCategoryInput;
}
