import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutDonationInput } from './category-create-without-donation.input';
import { CategoryCreateOrConnectWithoutDonationInput } from './category-create-or-connect-without-donation.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedOneWithoutDonationInput {

    @Field(() => CategoryCreateWithoutDonationInput, {nullable:true})
    create?: CategoryCreateWithoutDonationInput;

    @Field(() => CategoryCreateOrConnectWithoutDonationInput, {nullable:true})
    connectOrCreate?: CategoryCreateOrConnectWithoutDonationInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    connect?: CategoryWhereUniqueInput;
}
