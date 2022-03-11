import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UsersOnChatRoomUncheckedUpdateManyWithoutChatRoomInput } from '../users-on-chat-room/users-on-chat-room-unchecked-update-many-without-chat-room.input';

@InputType()
export class ChatRoomUncheckedUpdateWithoutMessagesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => UsersOnChatRoomUncheckedUpdateManyWithoutChatRoomInput, {nullable:true})
    usersOnChatRoom?: UsersOnChatRoomUncheckedUpdateManyWithoutChatRoomInput;
}
