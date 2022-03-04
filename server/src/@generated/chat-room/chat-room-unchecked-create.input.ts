import { Field, InputType, Int } from '@nestjs/graphql';

import { MessageUncheckedCreateNestedManyWithoutChatRoomInput } from '../message/message-unchecked-create-nested-many-without-chat-room.input';
import { UsersOnChatRoomUncheckedCreateNestedManyWithoutChatRoomInput } from '../users-on-chat-room/users-on-chat-room-unchecked-create-nested-many-without-chat-room.input';

@InputType()
export class ChatRoomUncheckedCreateInput {
    @Field(() => Int, { nullable: true })
    id?: number;

    @Field(() => MessageUncheckedCreateNestedManyWithoutChatRoomInput, {
        nullable: true,
    })
    messages?: MessageUncheckedCreateNestedManyWithoutChatRoomInput;

    @Field(() => UsersOnChatRoomUncheckedCreateNestedManyWithoutChatRoomInput, {
        nullable: true,
    })
    usersOnChatRoom?: UsersOnChatRoomUncheckedCreateNestedManyWithoutChatRoomInput;
}
