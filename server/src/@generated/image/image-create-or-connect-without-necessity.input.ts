import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { ImageCreateWithoutNecessityInput } from './image-create-without-necessity.input';

@InputType()
export class ImageCreateOrConnectWithoutNecessityInput {

    @Field(() => ImageWhereUniqueInput, {nullable:false})
    where!: ImageWhereUniqueInput;

    @Field(() => ImageCreateWithoutNecessityInput, {nullable:false})
    create!: ImageCreateWithoutNecessityInput;
}
