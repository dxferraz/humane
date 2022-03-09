import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateWithoutDonationInput } from './image-create-without-donation.input';
import { ImageCreateOrConnectWithoutDonationInput } from './image-create-or-connect-without-donation.input';
import { ImageCreateManyDonationInputEnvelope } from './image-create-many-donation-input-envelope.input';
import { ImageWhereUniqueInput } from './image-where-unique.input';

@InputType()
export class ImageCreateNestedManyWithoutDonationInput {

    @Field(() => [ImageCreateWithoutDonationInput], {nullable:true})
    create?: Array<ImageCreateWithoutDonationInput>;

    @Field(() => [ImageCreateOrConnectWithoutDonationInput], {nullable:true})
    connectOrCreate?: Array<ImageCreateOrConnectWithoutDonationInput>;

    @Field(() => ImageCreateManyDonationInputEnvelope, {nullable:true})
    createMany?: ImageCreateManyDonationInputEnvelope;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    connect?: Array<ImageWhereUniqueInput>;
}
