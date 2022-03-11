import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DonationOrderByRelationAggregateInput } from '../donation/donation-order-by-relation-aggregate.input';
import { NecessityOrderByRelationAggregateInput } from '../necessity/necessity-order-by-relation-aggregate.input';

@InputType()
export class CategoryOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => DonationOrderByRelationAggregateInput, {nullable:true})
    Donation?: DonationOrderByRelationAggregateInput;

    @Field(() => NecessityOrderByRelationAggregateInput, {nullable:true})
    Necessity?: NecessityOrderByRelationAggregateInput;
}
