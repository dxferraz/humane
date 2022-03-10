import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersOnChatRoomWhereInput } from './users-on-chat-room-where.input';
import { UsersOnChatRoomOrderByWithAggregationInput } from './users-on-chat-room-order-by-with-aggregation.input';
import { UsersOnChatRoomScalarFieldEnum } from './users-on-chat-room-scalar-field.enum';
import { UsersOnChatRoomScalarWhereWithAggregatesInput } from './users-on-chat-room-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UsersOnChatRoomCountAggregateInput } from './users-on-chat-room-count-aggregate.input';
import { UsersOnChatRoomAvgAggregateInput } from './users-on-chat-room-avg-aggregate.input';
import { UsersOnChatRoomSumAggregateInput } from './users-on-chat-room-sum-aggregate.input';
import { UsersOnChatRoomMinAggregateInput } from './users-on-chat-room-min-aggregate.input';
import { UsersOnChatRoomMaxAggregateInput } from './users-on-chat-room-max-aggregate.input';

@ArgsType()
export class UsersOnChatRoomGroupByArgs {

    @Field(() => UsersOnChatRoomWhereInput, {nullable:true})
    where?: UsersOnChatRoomWhereInput;

    @Field(() => [UsersOnChatRoomOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UsersOnChatRoomOrderByWithAggregationInput>;

    @Field(() => [UsersOnChatRoomScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UsersOnChatRoomScalarFieldEnum>;

    @Field(() => UsersOnChatRoomScalarWhereWithAggregatesInput, {nullable:true})
    having?: UsersOnChatRoomScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UsersOnChatRoomCountAggregateInput, {nullable:true})
    _count?: UsersOnChatRoomCountAggregateInput;

    @Field(() => UsersOnChatRoomAvgAggregateInput, {nullable:true})
    _avg?: UsersOnChatRoomAvgAggregateInput;

    @Field(() => UsersOnChatRoomSumAggregateInput, {nullable:true})
    _sum?: UsersOnChatRoomSumAggregateInput;

    @Field(() => UsersOnChatRoomMinAggregateInput, {nullable:true})
    _min?: UsersOnChatRoomMinAggregateInput;

    @Field(() => UsersOnChatRoomMaxAggregateInput, {nullable:true})
    _max?: UsersOnChatRoomMaxAggregateInput;
}
