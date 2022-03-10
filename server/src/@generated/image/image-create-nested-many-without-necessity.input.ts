import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateWithoutNecessityInput } from './image-create-without-necessity.input';
import { ImageCreateOrConnectWithoutNecessityInput } from './image-create-or-connect-without-necessity.input';
import { ImageCreateManyNecessityInputEnvelope } from './image-create-many-necessity-input-envelope.input';
import { ImageWhereUniqueInput } from './image-where-unique.input';

@InputType()
export class ImageCreateNestedManyWithoutNecessityInput {

    @Field(() => [ImageCreateWithoutNecessityInput], {nullable:true})
    create?: Array<ImageCreateWithoutNecessityInput>;

    @Field(() => [ImageCreateOrConnectWithoutNecessityInput], {nullable:true})
    connectOrCreate?: Array<ImageCreateOrConnectWithoutNecessityInput>;

    @Field(() => ImageCreateManyNecessityInputEnvelope, {nullable:true})
    createMany?: ImageCreateManyNecessityInputEnvelope;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    connect?: Array<ImageWhereUniqueInput>;
}
