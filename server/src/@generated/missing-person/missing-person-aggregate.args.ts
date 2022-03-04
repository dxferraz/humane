import { ArgsType, Field, Int } from '@nestjs/graphql';

import { MissingPersonAvgAggregateInput } from './missing-person-avg-aggregate.input';
import { MissingPersonCountAggregateInput } from './missing-person-count-aggregate.input';
import { MissingPersonMaxAggregateInput } from './missing-person-max-aggregate.input';
import { MissingPersonMinAggregateInput } from './missing-person-min-aggregate.input';
import { MissingPersonOrderByWithRelationInput } from './missing-person-order-by-with-relation.input';
import { MissingPersonSumAggregateInput } from './missing-person-sum-aggregate.input';
import { MissingPersonWhereInput } from './missing-person-where.input';
import { MissingPersonWhereUniqueInput } from './missing-person-where-unique.input';

@ArgsType()
export class MissingPersonAggregateArgs {
    @Field(() => MissingPersonWhereInput, { nullable: true })
    where?: MissingPersonWhereInput;

    @Field(() => [MissingPersonOrderByWithRelationInput], { nullable: true })
    orderBy?: Array<MissingPersonOrderByWithRelationInput>;

    @Field(() => MissingPersonWhereUniqueInput, { nullable: true })
    cursor?: MissingPersonWhereUniqueInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => MissingPersonCountAggregateInput, { nullable: true })
    _count?: MissingPersonCountAggregateInput;

    @Field(() => MissingPersonAvgAggregateInput, { nullable: true })
    _avg?: MissingPersonAvgAggregateInput;

    @Field(() => MissingPersonSumAggregateInput, { nullable: true })
    _sum?: MissingPersonSumAggregateInput;

    @Field(() => MissingPersonMinAggregateInput, { nullable: true })
    _min?: MissingPersonMinAggregateInput;

    @Field(() => MissingPersonMaxAggregateInput, { nullable: true })
    _max?: MissingPersonMaxAggregateInput;
}
