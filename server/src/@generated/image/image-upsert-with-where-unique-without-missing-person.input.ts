import { Field, InputType } from '@nestjs/graphql';

import { ImageCreateWithoutMissingPersonInput } from './image-create-without-missing-person.input';
import { ImageUpdateWithoutMissingPersonInput } from './image-update-without-missing-person.input';
import { ImageWhereUniqueInput } from './image-where-unique.input';

@InputType()
export class ImageUpsertWithWhereUniqueWithoutMissingPersonInput {
    @Field(() => ImageWhereUniqueInput, { nullable: false })
    where!: ImageWhereUniqueInput;

    @Field(() => ImageUpdateWithoutMissingPersonInput, { nullable: false })
    update!: ImageUpdateWithoutMissingPersonInput;

    @Field(() => ImageCreateWithoutMissingPersonInput, { nullable: false })
    create!: ImageCreateWithoutMissingPersonInput;
}
