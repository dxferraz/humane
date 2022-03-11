import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutNecessityInput } from './category-create-without-necessity.input';
import { CategoryCreateOrConnectWithoutNecessityInput } from './category-create-or-connect-without-necessity.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedOneWithoutNecessityInput {

    @Field(() => CategoryCreateWithoutNecessityInput, {nullable:true})
    create?: CategoryCreateWithoutNecessityInput;

    @Field(() => CategoryCreateOrConnectWithoutNecessityInput, {nullable:true})
    connectOrCreate?: CategoryCreateOrConnectWithoutNecessityInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    connect?: CategoryWhereUniqueInput;
}
