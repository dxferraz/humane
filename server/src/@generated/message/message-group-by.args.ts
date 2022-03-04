import { ArgsType, Field, Int } from '@nestjs/graphql';

import { MessageAvgAggregateInput } from './message-avg-aggregate.input';
import { MessageCountAggregateInput } from './message-count-aggregate.input';
import { MessageMaxAggregateInput } from './message-max-aggregate.input';
import { MessageMinAggregateInput } from './message-min-aggregate.input';
import { MessageOrderByWithAggregationInput } from './message-order-by-with-aggregation.input';
import { MessageScalarFieldEnum } from './message-scalar-field.enum';
import { MessageScalarWhereWithAggregatesInput } from './message-scalar-where-with-aggregates.input';
import { MessageSumAggregateInput } from './message-sum-aggregate.input';
import { MessageWhereInput } from './message-where.input';

@ArgsType()
export class MessageGroupByArgs {
    @Field(() => MessageWhereInput, { nullable: true })
    where?: MessageWhereInput;

    @Field(() => [MessageOrderByWithAggregationInput], { nullable: true })
    orderBy?: Array<MessageOrderByWithAggregationInput>;

    @Field(() => [MessageScalarFieldEnum], { nullable: false })
    by!: Array<keyof typeof MessageScalarFieldEnum>;

    @Field(() => MessageScalarWhereWithAggregatesInput, { nullable: true })
    having?: MessageScalarWhereWithAggregatesInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => MessageCountAggregateInput, { nullable: true })
    _count?: MessageCountAggregateInput;

    @Field(() => MessageAvgAggregateInput, { nullable: true })
    _avg?: MessageAvgAggregateInput;

    @Field(() => MessageSumAggregateInput, { nullable: true })
    _sum?: MessageSumAggregateInput;

    @Field(() => MessageMinAggregateInput, { nullable: true })
    _min?: MessageMinAggregateInput;

    @Field(() => MessageMaxAggregateInput, { nullable: true })
    _max?: MessageMaxAggregateInput;
}
