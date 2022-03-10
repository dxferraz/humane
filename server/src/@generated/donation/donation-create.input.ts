import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateNestedManyWithoutDonationInput } from '../image/image-create-nested-many-without-donation.input';
import { CategoryCreateNestedOneWithoutDonationInput } from '../category/category-create-nested-one-without-donation.input';
import { UserCreateNestedOneWithoutDonationsInput } from '../user/user-create-nested-one-without-donations.input';

@InputType()
export class DonationCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    timeStamp?: Date | string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:false})
    zipCode!: string;

    @Field(() => ImageCreateNestedManyWithoutDonationInput, {nullable:true})
    thumbnails?: ImageCreateNestedManyWithoutDonationInput;

    @Field(() => CategoryCreateNestedOneWithoutDonationInput, {nullable:false})
    category!: CategoryCreateNestedOneWithoutDonationInput;

    @Field(() => UserCreateNestedOneWithoutDonationsInput, {nullable:false})
    User!: UserCreateNestedOneWithoutDonationsInput;
}
