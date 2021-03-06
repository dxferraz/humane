import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ImageUncheckedUpdateManyWithoutDonationInput } from '../image/image-unchecked-update-many-without-donation.input';

@InputType()
export class DonationUncheckedUpdateWithoutUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => ImageUncheckedUpdateManyWithoutDonationInput, {nullable:true})
    thumbnails?: ImageUncheckedUpdateManyWithoutDonationInput;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    timeStamp?: Date | string;

    @Field(() => Int, {nullable:true})
    categoryId?: number;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => String, {nullable:true})
    zipCode?: string;
}
