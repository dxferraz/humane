import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageUpdateManyWithoutNecessityInput } from '../image/image-update-many-without-necessity.input';
import { UserUpdateOneRequiredWithoutNecessitiesInput } from '../user/user-update-one-required-without-necessities.input';

@InputType()
export class NecessityUpdateWithoutCategoryInput {

    @Field(() => ImageUpdateManyWithoutNecessityInput, {nullable:true})
    thumbnails?: ImageUpdateManyWithoutNecessityInput;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    timeStamp?: Date | string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => String, {nullable:true})
    zipCode?: string;

    @Field(() => UserUpdateOneRequiredWithoutNecessitiesInput, {nullable:true})
    User?: UserUpdateOneRequiredWithoutNecessitiesInput;
}
