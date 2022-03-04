import { Field, InputType } from '@nestjs/graphql';

import { MessageCreateNestedManyWithoutChatRoomInput } from '../message/message-create-nested-many-without-chat-room.input';
import { UsersOnChatRoomCreateNestedManyWithoutChatRoomInput } from '../users-on-chat-room/users-on-chat-room-create-nested-many-without-chat-room.input';

@InputType()
export class ChatRoomCreateInput {
    @Field(() => MessageCreateNestedManyWithoutChatRoomInput, { nullable: true })
    messages?: MessageCreateNestedManyWithoutChatRoomInput;

    @Field(() => UsersOnChatRoomCreateNestedManyWithoutChatRoomInput, {
        nullable: true,
    })
    usersOnChatRoom?: UsersOnChatRoomCreateNestedManyWithoutChatRoomInput;
}
