import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryCreateWithoutNecessityInput } from './category-create-without-necessity.input';

@InputType()
export class CategoryCreateOrConnectWithoutNecessityInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    where!: CategoryWhereUniqueInput;

    @Field(() => CategoryCreateWithoutNecessityInput, {nullable:false})
    create!: CategoryCreateWithoutNecessityInput;
}
