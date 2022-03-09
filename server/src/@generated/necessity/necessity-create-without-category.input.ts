import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateNestedManyWithoutNecessityInput } from '../image/image-create-nested-many-without-necessity.input';
import { UserCreateNestedOneWithoutNecessitiesInput } from '../user/user-create-nested-one-without-necessities.input';

@InputType()
export class NecessityCreateWithoutCategoryInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    timeStamp?: Date | string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:false})
    zipCode!: string;

    @Field(() => ImageCreateNestedManyWithoutNecessityInput, {nullable:true})
    thumbnails?: ImageCreateNestedManyWithoutNecessityInput;

    @Field(() => UserCreateNestedOneWithoutNecessitiesInput, {nullable:false})
    User!: UserCreateNestedOneWithoutNecessitiesInput;
}
