import { ArgsType, Field, Int } from '@nestjs/graphql';

import { MessageAvgAggregateInput } from './message-avg-aggregate.input';
import { MessageCountAggregateInput } from './message-count-aggregate.input';
import { MessageMaxAggregateInput } from './message-max-aggregate.input';
import { MessageMinAggregateInput } from './message-min-aggregate.input';
import { MessageOrderByWithRelationInput } from './message-order-by-with-relation.input';
import { MessageSumAggregateInput } from './message-sum-aggregate.input';
import { MessageWhereInput } from './message-where.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@ArgsType()
export class MessageAggregateArgs {
    @Field(() => MessageWhereInput, { nullable: true })
    where?: MessageWhereInput;

    @Field(() => [MessageOrderByWithRelationInput], { nullable: true })
    orderBy?: Array<MessageOrderByWithRelationInput>;

    @Field(() => MessageWhereUniqueInput, { nullable: true })
    cursor?: MessageWhereUniqueInput;

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
