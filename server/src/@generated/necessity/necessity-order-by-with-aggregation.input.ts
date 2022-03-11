import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NecessityCountOrderByAggregateInput } from './necessity-count-order-by-aggregate.input';
import { NecessityAvgOrderByAggregateInput } from './necessity-avg-order-by-aggregate.input';
import { NecessityMaxOrderByAggregateInput } from './necessity-max-order-by-aggregate.input';
import { NecessityMinOrderByAggregateInput } from './necessity-min-order-by-aggregate.input';
import { NecessitySumOrderByAggregateInput } from './necessity-sum-order-by-aggregate.input';

@InputType()
export class NecessityOrderByWithAggregationInput {

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

    @Field(() => NecessityCountOrderByAggregateInput, {nullable:true})
    _count?: NecessityCountOrderByAggregateInput;

    @Field(() => NecessityAvgOrderByAggregateInput, {nullable:true})
    _avg?: NecessityAvgOrderByAggregateInput;

    @Field(() => NecessityMaxOrderByAggregateInput, {nullable:true})
    _max?: NecessityMaxOrderByAggregateInput;

    @Field(() => NecessityMinOrderByAggregateInput, {nullable:true})
    _min?: NecessityMinOrderByAggregateInput;

    @Field(() => NecessitySumOrderByAggregateInput, {nullable:true})
    _sum?: NecessitySumOrderByAggregateInput;
}
