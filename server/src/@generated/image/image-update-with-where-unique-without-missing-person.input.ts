import { Field, InputType } from '@nestjs/graphql';

import { ImageUpdateWithoutMissingPersonInput } from './image-update-without-missing-person.input';
import { ImageWhereUniqueInput } from './image-where-unique.input';

@InputType()
export class ImageUpdateWithWhereUniqueWithoutMissingPersonInput {
    @Field(() => ImageWhereUniqueInput, { nullable: false })
    where!: ImageWhereUniqueInput;

    @Field(() => ImageUpdateWithoutMissingPersonInput, { nullable: false })
    data!: ImageUpdateWithoutMissingPersonInput;
}
