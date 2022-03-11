import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MissingPersonCountAggregate } from './missing-person-count-aggregate.output';
import { MissingPersonAvgAggregate } from './missing-person-avg-aggregate.output';
import { MissingPersonSumAggregate } from './missing-person-sum-aggregate.output';
import { MissingPersonMinAggregate } from './missing-person-min-aggregate.output';
import { MissingPersonMaxAggregate } from './missing-person-max-aggregate.output';

@ObjectType()
export class AggregateMissingPerson {

    @Field(() => MissingPersonCountAggregate, {nullable:true})
    _count?: MissingPersonCountAggregate;

    @Field(() => MissingPersonAvgAggregate, {nullable:true})
    _avg?: MissingPersonAvgAggregate;

    @Field(() => MissingPersonSumAggregate, {nullable:true})
    _sum?: MissingPersonSumAggregate;

    @Field(() => MissingPersonMinAggregate, {nullable:true})
    _min?: MissingPersonMinAggregate;

    @Field(() => MissingPersonMaxAggregate, {nullable:true})
    _max?: MissingPersonMaxAggregate;
}
