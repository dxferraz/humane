import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryCreateWithoutDonationInput } from './category-create-without-donation.input';

@InputType()
export class CategoryCreateOrConnectWithoutDonationInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    where!: CategoryWhereUniqueInput;

    @Field(() => CategoryCreateWithoutDonationInput, {nullable:false})
    create!: CategoryCreateWithoutDonationInput;
}
