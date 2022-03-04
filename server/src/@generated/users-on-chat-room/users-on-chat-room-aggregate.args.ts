import { ArgsType, Field, Int } from '@nestjs/graphql';

import { UsersOnChatRoomAvgAggregateInput } from './users-on-chat-room-avg-aggregate.input';
import { UsersOnChatRoomCountAggregateInput } from './users-on-chat-room-count-aggregate.input';
import { UsersOnChatRoomMaxAggregateInput } from './users-on-chat-room-max-aggregate.input';
import { UsersOnChatRoomMinAggregateInput } from './users-on-chat-room-min-aggregate.input';
import { UsersOnChatRoomOrderByWithRelationInput } from './users-on-chat-room-order-by-with-relation.input';
import { UsersOnChatRoomSumAggregateInput } from './users-on-chat-room-sum-aggregate.input';
import { UsersOnChatRoomWhereInput } from './users-on-chat-room-where.input';
import { UsersOnChatRoomWhereUniqueInput } from './users-on-chat-room-where-unique.input';

@ArgsType()
export class UsersOnChatRoomAggregateArgs {
    @Field(() => UsersOnChatRoomWhereInput, { nullable: true })
    where?: UsersOnChatRoomWhereInput;

    @Field(() => [UsersOnChatRoomOrderByWithRelationInput], { nullable: true })
    orderBy?: Array<UsersOnChatRoomOrderByWithRelationInput>;

    @Field(() => UsersOnChatRoomWhereUniqueInput, { nullable: true })
    cursor?: UsersOnChatRoomWhereUniqueInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => UsersOnChatRoomCountAggregateInput, { nullable: true })
    _count?: UsersOnChatRoomCountAggregateInput;

    @Field(() => UsersOnChatRoomAvgAggregateInput, { nullable: true })
    _avg?: UsersOnChatRoomAvgAggregateInput;

    @Field(() => UsersOnChatRoomSumAggregateInput, { nullable: true })
    _sum?: UsersOnChatRoomSumAggregateInput;

    @Field(() => UsersOnChatRoomMinAggregateInput, { nullable: true })
    _min?: UsersOnChatRoomMinAggregateInput;

    @Field(() => UsersOnChatRoomMaxAggregateInput, { nullable: true })
    _max?: UsersOnChatRoomMaxAggregateInput;
}
