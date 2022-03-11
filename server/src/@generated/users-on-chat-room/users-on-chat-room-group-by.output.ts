import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UsersOnChatRoomCountAggregate } from './users-on-chat-room-count-aggregate.output';
import { UsersOnChatRoomAvgAggregate } from './users-on-chat-room-avg-aggregate.output';
import { UsersOnChatRoomSumAggregate } from './users-on-chat-room-sum-aggregate.output';
import { UsersOnChatRoomMinAggregate } from './users-on-chat-room-min-aggregate.output';
import { UsersOnChatRoomMaxAggregate } from './users-on-chat-room-max-aggregate.output';

@ObjectType()
export class UsersOnChatRoomGroupBy {

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    chatRoomId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => UsersOnChatRoomCountAggregate, {nullable:true})
    _count?: UsersOnChatRoomCountAggregate;

    @Field(() => UsersOnChatRoomAvgAggregate, {nullable:true})
    _avg?: UsersOnChatRoomAvgAggregate;

    @Field(() => UsersOnChatRoomSumAggregate, {nullable:true})
    _sum?: UsersOnChatRoomSumAggregate;

    @Field(() => UsersOnChatRoomMinAggregate, {nullable:true})
    _min?: UsersOnChatRoomMinAggregate;

    @Field(() => UsersOnChatRoomMaxAggregate, {nullable:true})
    _max?: UsersOnChatRoomMaxAggregate;
}
