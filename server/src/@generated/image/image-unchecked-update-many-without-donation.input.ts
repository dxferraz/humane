import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateWithoutDonationInput } from './image-create-without-donation.input';
import { ImageCreateOrConnectWithoutDonationInput } from './image-create-or-connect-without-donation.input';
import { ImageUpsertWithWhereUniqueWithoutDonationInput } from './image-upsert-with-where-unique-without-donation.input';
import { ImageCreateManyDonationInputEnvelope } from './image-create-many-donation-input-envelope.input';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { ImageUpdateWithWhereUniqueWithoutDonationInput } from './image-update-with-where-unique-without-donation.input';
import { ImageUpdateManyWithWhereWithoutDonationInput } from './image-update-many-with-where-without-donation.input';
import { ImageScalarWhereInput } from './image-scalar-where.input';

@InputType()
export class ImageUncheckedUpdateManyWithoutDonationInput {

    @Field(() => [ImageCreateWithoutDonationInput], {nullable:true})
    create?: Array<ImageCreateWithoutDonationInput>;

    @Field(() => [ImageCreateOrConnectWithoutDonationInput], {nullable:true})
    connectOrCreate?: Array<ImageCreateOrConnectWithoutDonationInput>;

    @Field(() => [ImageUpsertWithWhereUniqueWithoutDonationInput], {nullable:true})
    upsert?: Array<ImageUpsertWithWhereUniqueWithoutDonationInput>;

    @Field(() => ImageCreateManyDonationInputEnvelope, {nullable:true})
    createMany?: ImageCreateManyDonationInputEnvelope;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    set?: Array<ImageWhereUniqueInput>;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    disconnect?: Array<ImageWhereUniqueInput>;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    delete?: Array<ImageWhereUniqueInput>;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    connect?: Array<ImageWhereUniqueInput>;

    @Field(() => [ImageUpdateWithWhereUniqueWithoutDonationInput], {nullable:true})
    update?: Array<ImageUpdateWithWhereUniqueWithoutDonationInput>;

    @Field(() => [ImageUpdateManyWithWhereWithoutDonationInput], {nullable:true})
    updateMany?: Array<ImageUpdateManyWithWhereWithoutDonationInput>;

    @Field(() => [ImageScalarWhereInput], {nullable:true})
    deleteMany?: Array<ImageScalarWhereInput>;
}
