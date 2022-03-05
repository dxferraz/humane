import { ArgsType, Field, Int } from '@nestjs/graphql';

import { MissingPersonAvgAggregateInput } from './missing-person-avg-aggregate.input';
import { MissingPersonCountAggregateInput } from './missing-person-count-aggregate.input';
import { MissingPersonMaxAggregateInput } from './missing-person-max-aggregate.input';
import { MissingPersonMinAggregateInput } from './missing-person-min-aggregate.input';
import { MissingPersonOrderByWithAggregationInput } from './missing-person-order-by-with-aggregation.input';
import { MissingPersonScalarFieldEnum } from './missing-person-scalar-field.enum';
import { MissingPersonScalarWhereWithAggregatesInput } from './missing-person-scalar-where-with-aggregates.input';
import { MissingPersonSumAggregateInput } from './missing-person-sum-aggregate.input';
import { MissingPersonWhereInput } from './missing-person-where.input';

@ArgsType()
export class MissingPersonGroupByArgs {
    @Field(() => MissingPersonWhereInput, { nullable: true })
    where?: MissingPersonWhereInput;

    @Field(() => [MissingPersonOrderByWithAggregationInput], { nullable: true })
    orderBy?: Array<MissingPersonOrderByWithAggregationInput>;

    @Field(() => [MissingPersonScalarFieldEnum], { nullable: false })
    by!: Array<keyof typeof MissingPersonScalarFieldEnum>;

    @Field(() => MissingPersonScalarWhereWithAggregatesInput, { nullable: true })
    having?: MissingPersonScalarWhereWithAggregatesInput;

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
