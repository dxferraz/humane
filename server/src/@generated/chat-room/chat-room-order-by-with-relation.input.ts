import { Field, InputType } from '@nestjs/graphql';

import { MessageOrderByRelationAggregateInput } from '../message/message-order-by-relation-aggregate.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { UsersOnChatRoomOrderByRelationAggregateInput } from '../users-on-chat-room/users-on-chat-room-order-by-relation-aggregate.input';

@InputType()
export class ChatRoomOrderByWithRelationInput {
    @Field(() => SortOrder, { nullable: true })
    id?: keyof typeof SortOrder;

    @Field(() => MessageOrderByRelationAggregateInput, { nullable: true })
    messages?: MessageOrderByRelationAggregateInput;

    @Field(() => UsersOnChatRoomOrderByRelationAggregateInput, { nullable: true })
    usersOnChatRoom?: UsersOnChatRoomOrderByRelationAggregateInput;
}
