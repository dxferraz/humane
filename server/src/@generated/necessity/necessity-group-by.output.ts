import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NecessityCountAggregate } from './necessity-count-aggregate.output';
import { NecessityAvgAggregate } from './necessity-avg-aggregate.output';
import { NecessitySumAggregate } from './necessity-sum-aggregate.output';
import { NecessityMinAggregate } from './necessity-min-aggregate.output';
import { NecessityMaxAggregate } from './necessity-max-aggregate.output';

@ObjectType()
export class NecessityGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    timeStamp!: Date | string;

    @Field(() => Int, {nullable:false})
    categoryId!: number;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:false})
    zipCode!: string;

    @Field(() => Int, {nullable:false})
    userId!: number;

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
