import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateNestedManyWithoutDonationInput } from '../image/image-create-nested-many-without-donation.input';
import { CategoryCreateNestedOneWithoutDonationInput } from '../category/category-create-nested-one-without-donation.input';
import { UserCreateNestedOneWithoutDonationsInput } from '../user/user-create-nested-one-without-donations.input';

@InputType()
export class DonationCreateInput {

    @Field(() => ImageCreateNestedManyWithoutDonationInput, {nullable:true})
    thumbnails?: ImageCreateNestedManyWithoutDonationInput;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    timeStamp?: Date | string;

    @Field(() => CategoryCreateNestedOneWithoutDonationInput, {nullable:false})
    category!: CategoryCreateNestedOneWithoutDonationInput;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:false})
    zipCode!: string;

    @Field(() => UserCreateNestedOneWithoutDonationsInput, {nullable:false})
    User!: UserCreateNestedOneWithoutDonationsInput;
}
