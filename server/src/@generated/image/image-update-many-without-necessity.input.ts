import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateWithoutNecessityInput } from './image-create-without-necessity.input';
import { ImageCreateOrConnectWithoutNecessityInput } from './image-create-or-connect-without-necessity.input';
import { ImageUpsertWithWhereUniqueWithoutNecessityInput } from './image-upsert-with-where-unique-without-necessity.input';
import { ImageCreateManyNecessityInputEnvelope } from './image-create-many-necessity-input-envelope.input';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { ImageUpdateWithWhereUniqueWithoutNecessityInput } from './image-update-with-where-unique-without-necessity.input';
import { ImageUpdateManyWithWhereWithoutNecessityInput } from './image-update-many-with-where-without-necessity.input';
import { ImageScalarWhereInput } from './image-scalar-where.input';

@InputType()
export class ImageUpdateManyWithoutNecessityInput {

    @Field(() => [ImageCreateWithoutNecessityInput], {nullable:true})
    create?: Array<ImageCreateWithoutNecessityInput>;

    @Field(() => [ImageCreateOrConnectWithoutNecessityInput], {nullable:true})
    connectOrCreate?: Array<ImageCreateOrConnectWithoutNecessityInput>;

    @Field(() => [ImageUpsertWithWhereUniqueWithoutNecessityInput], {nullable:true})
    upsert?: Array<ImageUpsertWithWhereUniqueWithoutNecessityInput>;

    @Field(() => ImageCreateManyNecessityInputEnvelope, {nullable:true})
    createMany?: ImageCreateManyNecessityInputEnvelope;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    set?: Array<ImageWhereUniqueInput>;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    disconnect?: Array<ImageWhereUniqueInput>;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    delete?: Array<ImageWhereUniqueInput>;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    connect?: Array<ImageWhereUniqueInput>;

    @Field(() => [ImageUpdateWithWhereUniqueWithoutNecessityInput], {nullable:true})
    update?: Array<ImageUpdateWithWhereUniqueWithoutNecessityInput>;

    @Field(() => [ImageUpdateManyWithWhereWithoutNecessityInput], {nullable:true})
    updateMany?: Array<ImageUpdateManyWithWhereWithoutNecessityInput>;

    @Field(() => [ImageScalarWhereInput], {nullable:true})
    deleteMany?: Array<ImageScalarWhereInput>;
}
