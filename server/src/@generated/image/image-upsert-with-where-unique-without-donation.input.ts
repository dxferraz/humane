import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { ImageUpdateWithoutDonationInput } from './image-update-without-donation.input';
import { ImageCreateWithoutDonationInput } from './image-create-without-donation.input';

@InputType()
export class ImageUpsertWithWhereUniqueWithoutDonationInput {

    @Field(() => ImageWhereUniqueInput, {nullable:false})
    where!: ImageWhereUniqueInput;

    @Field(() => ImageUpdateWithoutDonationInput, {nullable:false})
    update!: ImageUpdateWithoutDonationInput;

    @Field(() => ImageCreateWithoutDonationInput, {nullable:false})
    create!: ImageCreateWithoutDonationInput;
}
