import { Field, InputType } from '@nestjs/graphql';

import { MessageOrderByRelationAggregateInput } from '../message/message-order-by-relation-aggregate.input';
import { MissingPersonOrderByRelationAggregateInput } from '../missing-person/missing-person-order-by-relation-aggregate.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { UsersOnChatRoomOrderByRelationAggregateInput } from '../users-on-chat-room/users-on-chat-room-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, { nullable: true })
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    thumbnail?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    birthdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    phone?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    verified?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    verifiedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    password?: keyof typeof SortOrder;

    @Field(() => MissingPersonOrderByRelationAggregateInput, { nullable: true })
    reports?: MissingPersonOrderByRelationAggregateInput;

    @Field(() => UsersOnChatRoomOrderByRelationAggregateInput, { nullable: true })
    usersOnChatRoom?: UsersOnChatRoomOrderByRelationAggregateInput;

    @Field(() => MessageOrderByRelationAggregateInput, { nullable: true })
    messages?: MessageOrderByRelationAggregateInput;
}
