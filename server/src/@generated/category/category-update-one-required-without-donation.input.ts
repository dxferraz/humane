import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutDonationInput } from './category-create-without-donation.input';
import { CategoryCreateOrConnectWithoutDonationInput } from './category-create-or-connect-without-donation.input';
import { CategoryUpsertWithoutDonationInput } from './category-upsert-without-donation.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithoutDonationInput } from './category-update-without-donation.input';

@InputType()
export class CategoryUpdateOneRequiredWithoutDonationInput {

    @Field(() => CategoryCreateWithoutDonationInput, {nullable:true})
    create?: CategoryCreateWithoutDonationInput;

    @Field(() => CategoryCreateOrConnectWithoutDonationInput, {nullable:true})
    connectOrCreate?: CategoryCreateOrConnectWithoutDonationInput;

    @Field(() => CategoryUpsertWithoutDonationInput, {nullable:true})
    upsert?: CategoryUpsertWithoutDonationInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    connect?: CategoryWhereUniqueInput;

    @Field(() => CategoryUpdateWithoutDonationInput, {nullable:true})
    update?: CategoryUpdateWithoutDonationInput;
}
