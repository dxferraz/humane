import { Field, InputType } from '@nestjs/graphql';

import { SortOrder } from '../prisma/sort-order.enum';
import { ChatRoomAvgOrderByAggregateInput } from './chat-room-avg-order-by-aggregate.input';
import { ChatRoomCountOrderByAggregateInput } from './chat-room-count-order-by-aggregate.input';
import { ChatRoomMaxOrderByAggregateInput } from './chat-room-max-order-by-aggregate.input';
import { ChatRoomMinOrderByAggregateInput } from './chat-room-min-order-by-aggregate.input';
import { ChatRoomSumOrderByAggregateInput } from './chat-room-sum-order-by-aggregate.input';

@InputType()
export class ChatRoomOrderByWithAggregationInput {
    @Field(() => SortOrder, { nullable: true })
    id?: keyof typeof SortOrder;

    @Field(() => ChatRoomCountOrderByAggregateInput, { nullable: true })
    _count?: ChatRoomCountOrderByAggregateInput;

    @Field(() => ChatRoomAvgOrderByAggregateInput, { nullable: true })
    _avg?: ChatRoomAvgOrderByAggregateInput;

    @Field(() => ChatRoomMaxOrderByAggregateInput, { nullable: true })
    _max?: ChatRoomMaxOrderByAggregateInput;

    @Field(() => ChatRoomMinOrderByAggregateInput, { nullable: true })
    _min?: ChatRoomMinOrderByAggregateInput;

    @Field(() => ChatRoomSumOrderByAggregateInput, { nullable: true })
    _sum?: ChatRoomSumOrderByAggregateInput;
}
