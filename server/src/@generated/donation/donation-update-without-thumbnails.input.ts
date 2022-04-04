import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateOneRequiredWithoutDonationInput } from '../category/category-update-one-required-without-donation.input';
import { UserUpdateOneRequiredWithoutDonationsInput } from '../user/user-update-one-required-without-donations.input';

@InputType()
export class DonationUpdateWithoutThumbnailsInput {

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    timeStamp?: Date | string;

    @Field(() => CategoryUpdateOneRequiredWithoutDonationInput, {nullable:true})
    category?: CategoryUpdateOneRequiredWithoutDonationInput;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => String, {nullable:true})
    zipCode?: string;

    @Field(() => UserUpdateOneRequiredWithoutDonationsInput, {nullable:true})
    User?: UserUpdateOneRequiredWithoutDonationsInput;
}
