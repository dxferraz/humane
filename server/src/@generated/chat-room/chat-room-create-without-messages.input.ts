import { Field, InputType } from '@nestjs/graphql';

import { UsersOnChatRoomCreateNestedManyWithoutChatRoomInput } from '../users-on-chat-room/users-on-chat-room-create-nested-many-without-chat-room.input';

@InputType()
export class ChatRoomCreateWithoutMessagesInput {
    @Field(() => UsersOnChatRoomCreateNestedManyWithoutChatRoomInput, {
        nullable: true,
    })
    usersOnChatRoom?: UsersOnChatRoomCreateNestedManyWithoutChatRoomInput;
}
