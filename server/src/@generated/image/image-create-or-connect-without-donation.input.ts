import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { ImageCreateWithoutDonationInput } from './image-create-without-donation.input';

@InputType()
export class ImageCreateOrConnectWithoutDonationInput {

    @Field(() => ImageWhereUniqueInput, {nullable:false})
    where!: ImageWhereUniqueInput;

    @Field(() => ImageCreateWithoutDonationInput, {nullable:false})
    create!: ImageCreateWithoutDonationInput;
}
