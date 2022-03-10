import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MissingPersonCountOrderByAggregateInput } from './missing-person-count-order-by-aggregate.input';
import { MissingPersonAvgOrderByAggregateInput } from './missing-person-avg-order-by-aggregate.input';
import { MissingPersonMaxOrderByAggregateInput } from './missing-person-max-order-by-aggregate.input';
import { MissingPersonMinOrderByAggregateInput } from './missing-person-min-order-by-aggregate.input';
import { MissingPersonSumOrderByAggregateInput } from './missing-person-sum-order-by-aggregate.input';

@InputType()
export class MissingPersonOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    age?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    height?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    skin?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reporterId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    disappearanceDay?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eyeColor?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hairColor?: keyof typeof SortOrder;

    @Field(() => MissingPersonCountOrderByAggregateInput, {nullable:true})
    _count?: MissingPersonCountOrderByAggregateInput;

    @Field(() => MissingPersonAvgOrderByAggregateInput, {nullable:true})
    _avg?: MissingPersonAvgOrderByAggregateInput;

    @Field(() => MissingPersonMaxOrderByAggregateInput, {nullable:true})
    _max?: MissingPersonMaxOrderByAggregateInput;

    @Field(() => MissingPersonMinOrderByAggregateInput, {nullable:true})
    _min?: MissingPersonMinOrderByAggregateInput;

    @Field(() => MissingPersonSumOrderByAggregateInput, {nullable:true})
    _sum?: MissingPersonSumOrderByAggregateInput;
}
