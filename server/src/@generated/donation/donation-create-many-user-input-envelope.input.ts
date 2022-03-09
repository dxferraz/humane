import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DonationCreateManyUserInput } from './donation-create-many-user.input';

@InputType()
export class DonationCreateManyUserInputEnvelope {

    @Field(() => [DonationCreateManyUserInput], {nullable:false})
    data!: Array<DonationCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
