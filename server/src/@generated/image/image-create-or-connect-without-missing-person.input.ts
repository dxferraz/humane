import { Field, InputType } from '@nestjs/graphql';

import { ImageCreateWithoutMissingPersonInput } from './image-create-without-missing-person.input';
import { ImageWhereUniqueInput } from './image-where-unique.input';

@InputType()
export class ImageCreateOrConnectWithoutMissingPersonInput {
    @Field(() => ImageWhereUniqueInput, { nullable: false })
    where!: ImageWhereUniqueInput;

    @Field(() => ImageCreateWithoutMissingPersonInput, { nullable: false })
    create!: ImageCreateWithoutMissingPersonInput;
}
