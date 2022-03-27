import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateWithoutMissingPersonInput } from './image-create-without-missing-person.input';
import { ImageCreateOrConnectWithoutMissingPersonInput } from './image-create-or-connect-without-missing-person.input';
import { ImageUpsertWithWhereUniqueWithoutMissingPersonInput } from './image-upsert-with-where-unique-without-missing-person.input';
import { ImageCreateManyMissingPersonInputEnvelope } from './image-create-many-missing-person-input-envelope.input';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { ImageUpdateWithWhereUniqueWithoutMissingPersonInput } from './image-update-with-where-unique-without-missing-person.input';
import { ImageUpdateManyWithWhereWithoutMissingPersonInput } from './image-update-many-with-where-without-missing-person.input';
import { ImageScalarWhereInput } from './image-scalar-where.input';

@InputType()
export class ImageUncheckedUpdateManyWithoutMissingPersonInput {

    @Field(() => [ImageCreateWithoutMissingPersonInput], {nullable:true})
    create?: Array<ImageCreateWithoutMissingPersonInput>;

    @Field(() => [ImageCreateOrConnectWithoutMissingPersonInput], {nullable:true})
    connectOrCreate?: Array<ImageCreateOrConnectWithoutMissingPersonInput>;

    @Field(() => [ImageUpsertWithWhereUniqueWithoutMissingPersonInput], {nullable:true})
    upsert?: Array<ImageUpsertWithWhereUniqueWithoutMissingPersonInput>;

    @Field(() => ImageCreateManyMissingPersonInputEnvelope, {nullable:true})
    createMany?: ImageCreateManyMissingPersonInputEnvelope;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    set?: Array<ImageWhereUniqueInput>;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    disconnect?: Array<ImageWhereUniqueInput>;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    delete?: Array<ImageWhereUniqueInput>;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    connect?: Array<ImageWhereUniqueInput>;

    @Field(() => [ImageUpdateWithWhereUniqueWithoutMissingPersonInput], {nullable:true})
    update?: Array<ImageUpdateWithWhereUniqueWithoutMissingPersonInput>;

    @Field(() => [ImageUpdateManyWithWhereWithoutMissingPersonInput], {nullable:true})
    updateMany?: Array<ImageUpdateManyWithWhereWithoutMissingPersonInput>;

    @Field(() => [ImageScalarWhereInput], {nullable:true})
    deleteMany?: Array<ImageScalarWhereInput>;
}
