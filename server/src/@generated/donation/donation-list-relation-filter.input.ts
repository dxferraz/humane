import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DonationWhereInput } from './donation-where.input';

@InputType()
export class DonationListRelationFilter {

    @Field(() => DonationWhereInput, {nullable:true})
    every?: DonationWhereInput;

    @Field(() => DonationWhereInput, {nullable:true})
    some?: DonationWhereInput;

    @Field(() => DonationWhereInput, {nullable:true})
    none?: DonationWhereInput;
}
