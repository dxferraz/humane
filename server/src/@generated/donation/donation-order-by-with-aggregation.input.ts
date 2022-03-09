import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DonationCountOrderByAggregateInput } from './donation-count-order-by-aggregate.input';
import { DonationAvgOrderByAggregateInput } from './donation-avg-order-by-aggregate.input';
import { DonationMaxOrderByAggregateInput } from './donation-max-order-by-aggregate.input';
import { DonationMinOrderByAggregateInput } from './donation-min-order-by-aggregate.input';
import { DonationSumOrderByAggregateInput } from './donation-sum-order-by-aggregate.input';

@InputType()
export class DonationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timeStamp?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    zipCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => DonationCountOrderByAggregateInput, {nullable:true})
    _count?: DonationCountOrderByAggregateInput;

    @Field(() => DonationAvgOrderByAggregateInput, {nullable:true})
    _avg?: DonationAvgOrderByAggregateInput;

    @Field(() => DonationMaxOrderByAggregateInput, {nullable:true})
    _max?: DonationMaxOrderByAggregateInput;

    @Field(() => DonationMinOrderByAggregateInput, {nullable:true})
    _min?: DonationMinOrderByAggregateInput;

    @Field(() => DonationSumOrderByAggregateInput, {nullable:true})
    _sum?: DonationSumOrderByAggregateInput;
}
