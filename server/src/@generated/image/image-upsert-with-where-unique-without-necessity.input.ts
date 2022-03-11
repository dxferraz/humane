import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { ImageUpdateWithoutNecessityInput } from './image-update-without-necessity.input';
import { ImageCreateWithoutNecessityInput } from './image-create-without-necessity.input';

@InputType()
export class ImageUpsertWithWhereUniqueWithoutNecessityInput {

    @Field(() => ImageWhereUniqueInput, {nullable:false})
    where!: ImageWhereUniqueInput;

    @Field(() => ImageUpdateWithoutNecessityInput, {nullable:false})
    update!: ImageUpdateWithoutNecessityInput;

    @Field(() => ImageCreateWithoutNecessityInput, {nullable:false})
    create!: ImageCreateWithoutNecessityInput;
}
