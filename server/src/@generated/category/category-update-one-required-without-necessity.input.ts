import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutNecessityInput } from './category-create-without-necessity.input';
import { CategoryCreateOrConnectWithoutNecessityInput } from './category-create-or-connect-without-necessity.input';
import { CategoryUpsertWithoutNecessityInput } from './category-upsert-without-necessity.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithoutNecessityInput } from './category-update-without-necessity.input';

@InputType()
export class CategoryUpdateOneRequiredWithoutNecessityInput {

    @Field(() => CategoryCreateWithoutNecessityInput, {nullable:true})
    create?: CategoryCreateWithoutNecessityInput;

    @Field(() => CategoryCreateOrConnectWithoutNecessityInput, {nullable:true})
    connectOrCreate?: CategoryCreateOrConnectWithoutNecessityInput;

    @Field(() => CategoryUpsertWithoutNecessityInput, {nullable:true})
    upsert?: CategoryUpsertWithoutNecessityInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    connect?: CategoryWhereUniqueInput;

    @Field(() => CategoryUpdateWithoutNecessityInput, {nullable:true})
    update?: CategoryUpdateWithoutNecessityInput;
}
