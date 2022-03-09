import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { ImageUpdateWithoutDonationInput } from './image-update-without-donation.input';

@InputType()
export class ImageUpdateWithWhereUniqueWithoutDonationInput {

    @Field(() => ImageWhereUniqueInput, {nullable:false})
    where!: ImageWhereUniqueInput;

    @Field(() => ImageUpdateWithoutDonationInput, {nullable:false})
    data!: ImageUpdateWithoutDonationInput;
}
