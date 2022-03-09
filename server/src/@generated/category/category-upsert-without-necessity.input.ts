import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutNecessityInput } from './category-update-without-necessity.input';
import { CategoryCreateWithoutNecessityInput } from './category-create-without-necessity.input';

@InputType()
export class CategoryUpsertWithoutNecessityInput {

    @Field(() => CategoryUpdateWithoutNecessityInput, {nullable:false})
    update!: CategoryUpdateWithoutNecessityInput;

    @Field(() => CategoryCreateWithoutNecessityInput, {nullable:false})
    create!: CategoryCreateWithoutNecessityInput;
}
