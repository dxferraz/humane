import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ImageUncheckedCreateNestedManyWithoutNecessityInput } from '../image/image-unchecked-create-nested-many-without-necessity.input';

@InputType()
export class NecessityUncheckedCreateWithoutUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => ImageUncheckedCreateNestedManyWithoutNecessityInput, {nullable:true})
    thumbnails?: ImageUncheckedCreateNestedManyWithoutNecessityInput;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    timeStamp?: Date | string;

    @Field(() => Int, {nullable:false})
    categoryId!: number;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:false})
    zipCode!: string;
}
