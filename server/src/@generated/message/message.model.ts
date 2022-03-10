import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';
import { ChatRoom } from '../chat-room/chat-room.model';

@ObjectType()
export class Message {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    message!: string;

    @Field(() => Date, {nullable:false})
    timeStamp!: Date;

    @Field(() => User, {nullable:false})
    author?: User;

    @Field(() => Int, {nullable:false})
    authorId!: number;

    @Field(() => ChatRoom, {nullable:false})
    chatRoom?: ChatRoom;

    @Field(() => Int, {nullable:false})
    chatRoomId!: number;
}
