import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateNestedOneWithoutNecessityInput } from '../category/category-create-nested-one-without-necessity.input';
import { UserCreateNestedOneWithoutNecessitiesInput } from '../user/user-create-nested-one-without-necessities.input';

@InputType()
export class NecessityCreateWithoutThumbnailsInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    timeStamp?: Date | string;

    @Field(() => CategoryCreateNestedOneWithoutNecessityInput, {nullable:false})
    category!: CategoryCreateNestedOneWithoutNecessityInput;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:false})
    zipCode!: string;

    @Field(() => UserCreateNestedOneWithoutNecessitiesInput, {nullable:false})
    User!: UserCreateNestedOneWithoutNecessitiesInput;
}
