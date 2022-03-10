import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DonationUncheckedCreateNestedManyWithoutCategoryInput } from '../donation/donation-unchecked-create-nested-many-without-category.input';

@InputType()
export class CategoryUncheckedCreateWithoutNecessityInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => DonationUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    Donation?: DonationUncheckedCreateNestedManyWithoutCategoryInput;
}
