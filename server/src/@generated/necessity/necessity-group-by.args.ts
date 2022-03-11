import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NecessityWhereInput } from './necessity-where.input';
import { NecessityOrderByWithAggregationInput } from './necessity-order-by-with-aggregation.input';
import { NecessityScalarFieldEnum } from './necessity-scalar-field.enum';
import { NecessityScalarWhereWithAggregatesInput } from './necessity-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { NecessityCountAggregateInput } from './necessity-count-aggregate.input';
import { NecessityAvgAggregateInput } from './necessity-avg-aggregate.input';
import { NecessitySumAggregateInput } from './necessity-sum-aggregate.input';
import { NecessityMinAggregateInput } from './necessity-min-aggregate.input';
import { NecessityMaxAggregateInput } from './necessity-max-aggregate.input';

@ArgsType()
export class NecessityGroupByArgs {

    @Field(() => NecessityWhereInput, {nullable:true})
    where?: NecessityWhereInput;

    @Field(() => [NecessityOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<NecessityOrderByWithAggregationInput>;

    @Field(() => [NecessityScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof NecessityScalarFieldEnum>;

    @Field(() => NecessityScalarWhereWithAggregatesInput, {nullable:true})
    having?: NecessityScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => NecessityCountAggregateInput, {nullable:true})
    _count?: NecessityCountAggregateInput;

    @Field(() => NecessityAvgAggregateInput, {nullable:true})
    _avg?: NecessityAvgAggregateInput;

    @Field(() => NecessitySumAggregateInput, {nullable:true})
    _sum?: NecessitySumAggregateInput;

    @Field(() => NecessityMinAggregateInput, {nullable:true})
    _min?: NecessityMinAggregateInput;

    @Field(() => NecessityMaxAggregateInput, {nullable:true})
    _max?: NecessityMaxAggregateInput;
}
