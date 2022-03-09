import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { ImageUpdateWithoutNecessityInput } from './image-update-without-necessity.input';

@InputType()
export class ImageUpdateWithWhereUniqueWithoutNecessityInput {

    @Field(() => ImageWhereUniqueInput, {nullable:false})
    where!: ImageWhereUniqueInput;

    @Field(() => ImageUpdateWithoutNecessityInput, {nullable:false})
    data!: ImageUpdateWithoutNecessityInput;
}
