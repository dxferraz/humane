import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';
import { ChatRoom } from '../chat-room/chat-room.model';

@ObjectType()
export class UsersOnChatRoom {

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => ChatRoom, {nullable:false})
    chatRoom?: ChatRoom;

    @Field(() => Int, {nullable:false})
    chatRoomId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;
}
