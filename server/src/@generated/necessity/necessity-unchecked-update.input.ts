import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ImageUncheckedUpdateManyWithoutNecessityInput } from '../image/image-unchecked-update-many-without-necessity.input';

@InputType()
export class NecessityUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => ImageUncheckedUpdateManyWithoutNecessityInput, {nullable:true})
    thumbnails?: ImageUncheckedUpdateManyWithoutNecessityInput;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    timeStamp?: Date | string;

    @Field(() => Int, {nullable:true})
    categoryId?: number;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => String, {nullable:true})
    zipCode?: string;

    @Field(() => Int, {nullable:true})
    userId?: number;
}
