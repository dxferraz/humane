import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { ImageCreateWithoutMissingPersonInput } from './image-create-without-missing-person.input';

@InputType()
export class ImageCreateOrConnectWithoutMissingPersonInput {

    @Field(() => ImageWhereUniqueInput, {nullable:false})
    where!: ImageWhereUniqueInput;

    @Field(() => ImageCreateWithoutMissingPersonInput, {nullable:false})
    create!: ImageCreateWithoutMissingPersonInput;
}
