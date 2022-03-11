import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DonationCreateManyInput } from './donation-create-many.input';

@ArgsType()
export class CreateManyDonationArgs {

    @Field(() => [DonationCreateManyInput], {nullable:false})
    data!: Array<DonationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
