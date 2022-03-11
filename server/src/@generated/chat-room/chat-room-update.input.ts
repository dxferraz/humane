import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageUpdateManyWithoutChatRoomInput } from '../message/message-update-many-without-chat-room.input';
import { UsersOnChatRoomUpdateManyWithoutChatRoomInput } from '../users-on-chat-room/users-on-chat-room-update-many-without-chat-room.input';

@InputType()
export class ChatRoomUpdateInput {

    @Field(() => MessageUpdateManyWithoutChatRoomInput, {nullable:true})
    messages?: MessageUpdateManyWithoutChatRoomInput;

    @Field(() => UsersOnChatRoomUpdateManyWithoutChatRoomInput, {nullable:true})
    usersOnChatRoom?: UsersOnChatRoomUpdateManyWithoutChatRoomInput;
}
