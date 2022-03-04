import { ArgsType, Field, Int } from '@nestjs/graphql';

import { ChatRoomAvgAggregateInput } from './chat-room-avg-aggregate.input';
import { ChatRoomCountAggregateInput } from './chat-room-count-aggregate.input';
import { ChatRoomMaxAggregateInput } from './chat-room-max-aggregate.input';
import { ChatRoomMinAggregateInput } from './chat-room-min-aggregate.input';
import { ChatRoomOrderByWithAggregationInput } from './chat-room-order-by-with-aggregation.input';
import { ChatRoomScalarFieldEnum } from './chat-room-scalar-field.enum';
import { ChatRoomScalarWhereWithAggregatesInput } from './chat-room-scalar-where-with-aggregates.input';
import { ChatRoomSumAggregateInput } from './chat-room-sum-aggregate.input';
import { ChatRoomWhereInput } from './chat-room-where.input';

@ArgsType()
export class ChatRoomGroupByArgs {
    @Field(() => ChatRoomWhereInput, { nullable: true })
    where?: ChatRoomWhereInput;

    @Field(() => [ChatRoomOrderByWithAggregationInput], { nullable: true })
    orderBy?: Array<ChatRoomOrderByWithAggregationInput>;

    @Field(() => [ChatRoomScalarFieldEnum], { nullable: false })
    by!: Array<keyof typeof ChatRoomScalarFieldEnum>;

    @Field(() => ChatRoomScalarWhereWithAggregatesInput, { nullable: true })
    having?: ChatRoomScalarWhereWithAggregatesInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => ChatRoomCountAggregateInput, { nullable: true })
    _count?: ChatRoomCountAggregateInput;

    @Field(() => ChatRoomAvgAggregateInput, { nullable: true })
    _avg?: ChatRoomAvgAggregateInput;

    @Field(() => ChatRoomSumAggregateInput, { nullable: true })
    _sum?: ChatRoomSumAggregateInput;

    @Field(() => ChatRoomMinAggregateInput, { nullable: true })
    _min?: ChatRoomMinAggregateInput;

    @Field(() => ChatRoomMaxAggregateInput, { nullable: true })
    _max?: ChatRoomMaxAggregateInput;
}
