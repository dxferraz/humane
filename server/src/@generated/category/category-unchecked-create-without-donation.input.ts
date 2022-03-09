import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NecessityUncheckedCreateNestedManyWithoutCategoryInput } from '../necessity/necessity-unchecked-create-nested-many-without-category.input';

@InputType()
export class CategoryUncheckedCreateWithoutDonationInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => NecessityUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    Necessity?: NecessityUncheckedCreateNestedManyWithoutCategoryInput;
}
