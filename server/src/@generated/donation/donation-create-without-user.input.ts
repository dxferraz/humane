import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateNestedManyWithoutDonationInput } from '../image/image-create-nested-many-without-donation.input';
import { CategoryCreateNestedOneWithoutDonationInput } from '../category/category-create-nested-one-without-donation.input';

@InputType()
export class DonationCreateWithoutUserInput {

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
}
