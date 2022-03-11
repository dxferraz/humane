import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersOnChatRoomUpdateManyWithoutChatRoomInput } from '../users-on-chat-room/users-on-chat-room-update-many-without-chat-room.input';

@InputType()
export class ChatRoomUpdateWithoutMessagesInput {

    @Field(() => UsersOnChatRoomUpdateManyWithoutChatRoomInput, {nullable:true})
    usersOnChatRoom?: UsersOnChatRoomUpdateManyWithoutChatRoomInput;
}
