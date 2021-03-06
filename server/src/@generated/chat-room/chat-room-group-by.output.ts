import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ChatRoomCountAggregate } from './chat-room-count-aggregate.output';
import { ChatRoomAvgAggregate } from './chat-room-avg-aggregate.output';
import { ChatRoomSumAggregate } from './chat-room-sum-aggregate.output';
import { ChatRoomMinAggregate } from './chat-room-min-aggregate.output';
import { ChatRoomMaxAggregate } from './chat-room-max-aggregate.output';

@ObjectType()
export class ChatRoomGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => ChatRoomCountAggregate, {nullable:true})
    _count?: ChatRoomCountAggregate;

    @Field(() => ChatRoomAvgAggregate, {nullable:true})
    _avg?: ChatRoomAvgAggregate;

    @Field(() => ChatRoomSumAggregate, {nullable:true})
    _sum?: ChatRoomSumAggregate;

    @Field(() => ChatRoomMinAggregate, {nullable:true})
    _min?: ChatRoomMinAggregate;

    @Field(() => ChatRoomMaxAggregate, {nullable:true})
    _max?: ChatRoomMaxAggregate;
}
