import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DonationWhereInput } from './donation-where.input';

@InputType()
export class DonationRelationFilter {

    @Field(() => DonationWhereInput, {nullable:true})
    is?: DonationWhereInput;

    @Field(() => DonationWhereInput, {nullable:true})
    isNot?: DonationWhereInput;
}
