import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageUpdateManyWithoutNecessityInput } from '../image/image-update-many-without-necessity.input';
import { CategoryUpdateOneRequiredWithoutNecessityInput } from '../category/category-update-one-required-without-necessity.input';

@InputType()
export class NecessityUpdateWithoutUserInput {

    @Field(() => ImageUpdateManyWithoutNecessityInput, {nullable:true})
    thumbnails?: ImageUpdateManyWithoutNecessityInput;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    timeStamp?: Date | string;

    @Field(() => CategoryUpdateOneRequiredWithoutNecessityInput, {nullable:true})
    category?: CategoryUpdateOneRequiredWithoutNecessityInput;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => String, {nullable:true})
    zipCode?: string;
}
