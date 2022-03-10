import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NecessityCreateNestedManyWithoutCategoryInput } from '../necessity/necessity-create-nested-many-without-category.input';

@InputType()
export class CategoryCreateWithoutDonationInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => NecessityCreateNestedManyWithoutCategoryInput, {nullable:true})
    Necessity?: NecessityCreateNestedManyWithoutCategoryInput;
}
