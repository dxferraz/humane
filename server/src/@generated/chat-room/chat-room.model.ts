import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Message } from '../message/message.model';
import { UsersOnChatRoom } from '../users-on-chat-room/users-on-chat-room.model';
import { ChatRoomCount } from './chat-room-count.output';

@ObjectType()
export class ChatRoom {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => [Message], {nullable:true})
    messages?: Array<Message>;

    @Field(() => [UsersOnChatRoom], {nullable:true})
    usersOnChatRoom?: Array<UsersOnChatRoom>;

    @Field(() => ChatRoomCount, {nullable:false})
    _count?: ChatRoomCount;
}
