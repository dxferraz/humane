import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import { Skin } from '../prisma/skin.enum';
import { MissingPersonAvgAggregate } from './missing-person-avg-aggregate.output';
import { MissingPersonCountAggregate } from './missing-person-count-aggregate.output';
import { MissingPersonMaxAggregate } from './missing-person-max-aggregate.output';
import { MissingPersonMinAggregate } from './missing-person-min-aggregate.output';
import { MissingPersonSumAggregate } from './missing-person-sum-aggregate.output';

@ObjectType()
export class MissingPersonGroupBy {
    @Field(() => Int, { nullable: false })
    id!: number;

    @Field(() => String, { nullable: false })
    name!: string;

    @Field(() => Int, { nullable: false })
    age!: number;

    @Field(() => Float, { nullable: false })
    height!: number;

    @Field(() => Skin, { nullable: false })
    skin!: keyof typeof Skin;

    @Field(() => String, { nullable: false })
    description!: string;

    @Field(() => Int, { nullable: false })
    reporterId!: number;

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
