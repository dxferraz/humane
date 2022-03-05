import { Field, InputType, Int } from '@nestjs/graphql';

import { MessageUncheckedUpdateManyWithoutChatRoomInput } from '../message/message-unchecked-update-many-without-chat-room.input';
import { UsersOnChatRoomUncheckedUpdateManyWithoutChatRoomInput } from '../users-on-chat-room/users-on-chat-room-unchecked-update-many-without-chat-room.input';

@InputType()
export class ChatRoomUncheckedUpdateInput {
    @Field(() => Int, { nullable: true })
    id?: number;

    @Field(() => MessageUncheckedUpdateManyWithoutChatRoomInput, { nullable: true })
    messages?: MessageUncheckedUpdateManyWithoutChatRoomInput;

    @Field(() => UsersOnChatRoomUncheckedUpdateManyWithoutChatRoomInput, {
        nullable: true,
    })
    usersOnChatRoom?: UsersOnChatRoomUncheckedUpdateManyWithoutChatRoomInput;
}
