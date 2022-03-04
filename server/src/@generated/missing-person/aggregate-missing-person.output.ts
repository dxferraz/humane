import { Field, ObjectType } from '@nestjs/graphql';

import { MissingPersonAvgAggregate } from './missing-person-avg-aggregate.output';
import { MissingPersonCountAggregate } from './missing-person-count-aggregate.output';
import { MissingPersonMaxAggregate } from './missing-person-max-aggregate.output';
import { MissingPersonMinAggregate } from './missing-person-min-aggregate.output';
import { MissingPersonSumAggregate } from './missing-person-sum-aggregate.output';

@ObjectType()
export class AggregateMissingPerson {
    @Field(() => MissingPersonCountAggregate, { nullable: true })
    _count?: MissingPersonCountAggregate;

    @Field(() => MissingPersonAvgAggregate, { nullable: true })
    _avg?: MissingPersonAvgAggregate;

    @Field(() => MissingPersonSumAggregate, { nullable: true })
    _sum?: MissingPersonSumAggregate;

    @Field(() => MissingPersonMinAggregate, { nullable: true })
    _min?: MissingPersonMinAggregate;

    @Field(() => MissingPersonMaxAggregate, { nullable: true })
    _max?: MissingPersonMaxAggregate;
}
