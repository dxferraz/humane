import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateWithoutMissingPersonInput } from './image-create-without-missing-person.input';
import { ImageCreateOrConnectWithoutMissingPersonInput } from './image-create-or-connect-without-missing-person.input';
import { ImageCreateManyMissingPersonInputEnvelope } from './image-create-many-missing-person-input-envelope.input';
import { ImageWhereUniqueInput } from './image-where-unique.input';

@InputType()
export class ImageUncheckedCreateNestedManyWithoutMissingPersonInput {

    @Field(() => [ImageCreateWithoutMissingPersonInput], {nullable:true})
    create?: Array<ImageCreateWithoutMissingPersonInput>;

    @Field(() => [ImageCreateOrConnectWithoutMissingPersonInput], {nullable:true})
    connectOrCreate?: Array<ImageCreateOrConnectWithoutMissingPersonInput>;

    @Field(() => ImageCreateManyMissingPersonInputEnvelope, {nullable:true})
    createMany?: ImageCreateManyMissingPersonInputEnvelope;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    connect?: Array<ImageWhereUniqueInput>;
}
