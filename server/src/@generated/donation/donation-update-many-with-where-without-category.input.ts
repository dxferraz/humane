import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DonationScalarWhereInput } from './donation-scalar-where.input';
import { DonationUpdateManyMutationInput } from './donation-update-many-mutation.input';

@InputType()
export class DonationUpdateManyWithWhereWithoutCategoryInput {

    @Field(() => DonationScalarWhereInput, {nullable:false})
    where!: DonationScalarWhereInput;

    @Field(() => DonationUpdateManyMutationInput, {nullable:false})
    data!: DonationUpdateManyMutationInput;
}
