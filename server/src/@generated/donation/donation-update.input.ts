import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageUpdateManyWithoutDonationInput } from '../image/image-update-many-without-donation.input';
import { CategoryUpdateOneRequiredWithoutDonationInput } from '../category/category-update-one-required-without-donation.input';
import { UserUpdateOneRequiredWithoutDonationsInput } from '../user/user-update-one-required-without-donations.input';

@InputType()
export class DonationUpdateInput {

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    timeStamp?: Date | string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => String, {nullable:true})
    zipCode?: string;

    @Field(() => ImageUpdateManyWithoutDonationInput, {nullable:true})
    thumbnails?: ImageUpdateManyWithoutDonationInput;

    @Field(() => CategoryUpdateOneRequiredWithoutDonationInput, {nullable:true})
    category?: CategoryUpdateOneRequiredWithoutDonationInput;

    @Field(() => UserUpdateOneRequiredWithoutDonationsInput, {nullable:true})
    User?: UserUpdateOneRequiredWithoutDonationsInput;
}
