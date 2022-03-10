import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MissingPersonOrderByWithRelationInput } from '../missing-person/missing-person-order-by-with-relation.input';
import { DonationOrderByWithRelationInput } from '../donation/donation-order-by-with-relation.input';
import { NecessityOrderByWithRelationInput } from '../necessity/necessity-order-by-with-relation.input';

@InputType()
export class ImageOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => MissingPersonOrderByWithRelationInput, {nullable:true})
    MissingPerson?: MissingPersonOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    missingPersonId?: keyof typeof SortOrder;

    @Field(() => DonationOrderByWithRelationInput, {nullable:true})
    Donation?: DonationOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    donationId?: keyof typeof SortOrder;

    @Field(() => NecessityOrderByWithRelationInput, {nullable:true})
    Necessity?: NecessityOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    necessityId?: keyof typeof SortOrder;
}
