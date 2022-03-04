import { Field, InputType } from '@nestjs/graphql';

import { ImageCreateManyMissingPersonInputEnvelope } from './image-create-many-missing-person-input-envelope.input';
import { ImageCreateOrConnectWithoutMissingPersonInput } from './image-create-or-connect-without-missing-person.input';
import { ImageCreateWithoutMissingPersonInput } from './image-create-without-missing-person.input';
import { ImageWhereUniqueInput } from './image-where-unique.input';

@InputType()
export class ImageCreateNestedManyWithoutMissingPersonInput {
    @Field(() => [ImageCreateWithoutMissingPersonInput], { nullable: true })
    create?: Array<ImageCreateWithoutMissingPersonInput>;

    @Field(() => [ImageCreateOrConnectWithoutMissingPersonInput], { nullable: true })
    connectOrCreate?: Array<ImageCreateOrConnectWithoutMissingPersonInput>;

    @Field(() => ImageCreateManyMissingPersonInputEnvelope, { nullable: true })
    createMany?: ImageCreateManyMissingPersonInputEnvelope;

    @Field(() => [ImageWhereUniqueInput], { nullable: true })
    connect?: Array<ImageWhereUniqueInput>;
}
