import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UsersOnChatRoomCountOrderByAggregateInput } from './users-on-chat-room-count-order-by-aggregate.input';
import { UsersOnChatRoomAvgOrderByAggregateInput } from './users-on-chat-room-avg-order-by-aggregate.input';
import { UsersOnChatRoomMaxOrderByAggregateInput } from './users-on-chat-room-max-order-by-aggregate.input';
import { UsersOnChatRoomMinOrderByAggregateInput } from './users-on-chat-room-min-order-by-aggregate.input';
import { UsersOnChatRoomSumOrderByAggregateInput } from './users-on-chat-room-sum-order-by-aggregate.input';

@InputType()
export class UsersOnChatRoomOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    chatRoomId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => UsersOnChatRoomCountOrderByAggregateInput, {nullable:true})
    _count?: UsersOnChatRoomCountOrderByAggregateInput;

    @Field(() => UsersOnChatRoomAvgOrderByAggregateInput, {nullable:true})
    _avg?: UsersOnChatRoomAvgOrderByAggregateInput;

    @Field(() => UsersOnChatRoomMaxOrderByAggregateInput, {nullable:true})
    _max?: UsersOnChatRoomMaxOrderByAggregateInput;

    @Field(() => UsersOnChatRoomMinOrderByAggregateInput, {nullable:true})
    _min?: UsersOnChatRoomMinOrderByAggregateInput;

    @Field(() => UsersOnChatRoomSumOrderByAggregateInput, {nullable:true})
    _sum?: UsersOnChatRoomSumOrderByAggregateInput;
}
