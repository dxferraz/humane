import { Field, InputType } from '@nestjs/graphql';

import { ChatRoomCreateWithoutUsersOnChatRoomInput } from './chat-room-create-without-users-on-chat-room.input';
import { ChatRoomUpdateWithoutUsersOnChatRoomInput } from './chat-room-update-without-users-on-chat-room.input';

@InputType()
export class ChatRoomUpsertWithoutUsersOnChatRoomInput {
    @Field(() => ChatRoomUpdateWithoutUsersOnChatRoomInput, { nullable: false })
    update!: ChatRoomUpdateWithoutUsersOnChatRoomInput;

    @Field(() => ChatRoomCreateWithoutUsersOnChatRoomInput, { nullable: false })
    create!: ChatRoomCreateWithoutUsersOnChatRoomInput;
}
