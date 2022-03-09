import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NecessityCountAggregate } from './necessity-count-aggregate.output';
import { NecessityAvgAggregate } from './necessity-avg-aggregate.output';
import { NecessitySumAggregate } from './necessity-sum-aggregate.output';
import { NecessityMinAggregate } from './necessity-min-aggregate.output';
import { NecessityMaxAggregate } from './necessity-max-aggregate.output';

@ObjectType()
export class AggregateNecessity {

    @Field(() => NecessityCountAggregate, {nullable:true})
    _count?: NecessityCountAggregate;

    @Field(() => NecessityAvgAggregate, {nullable:true})
    _avg?: NecessityAvgAggregate;

    @Field(() => NecessitySumAggregate, {nullable:true})
    _sum?: NecessitySumAggregate;

    @Field(() => NecessityMinAggregate, {nullable:true})
    _min?: NecessityMinAggregate;

    @Field(() => NecessityMaxAggregate, {nullable:true})
    _max?: NecessityMaxAggregate;
}
