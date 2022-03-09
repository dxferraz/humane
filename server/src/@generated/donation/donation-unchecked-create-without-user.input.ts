import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ImageUncheckedCreateNestedManyWithoutDonationInput } from '../image/image-unchecked-create-nested-many-without-donation.input';

@InputType()
export class DonationUncheckedCreateWithoutUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    timeStamp?: Date | string;

    @Field(() => Int, {nullable:false})
    categoryId!: number;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:false})
    zipCode!: string;

    @Field(() => ImageUncheckedCreateNestedManyWithoutDonationInput, {nullable:true})
    thumbnails?: ImageUncheckedCreateNestedManyWithoutDonationInput;
}
