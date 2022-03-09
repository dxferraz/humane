import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { ImageUpdateWithoutMissingPersonInput } from './image-update-without-missing-person.input';
import { ImageCreateWithoutMissingPersonInput } from './image-create-without-missing-person.input';

@InputType()
export class ImageUpsertWithWhereUniqueWithoutMissingPersonInput {

    @Field(() => ImageWhereUniqueInput, {nullable:false})
    where!: ImageWhereUniqueInput;

    @Field(() => ImageUpdateWithoutMissingPersonInput, {nullable:false})
    update!: ImageUpdateWithoutMissingPersonInput;

    @Field(() => ImageCreateWithoutMissingPersonInput, {nullable:false})
    create!: ImageCreateWithoutMissingPersonInput;
}
