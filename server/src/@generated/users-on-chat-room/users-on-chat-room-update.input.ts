import { Field, InputType } from '@nestjs/graphql';

import { ChatRoomUpdateOneRequiredWithoutUsersOnChatRoomInput } from '../chat-room/chat-room-update-one-required-without-users-on-chat-room.input';
import { UserUpdateOneRequiredWithoutUsersOnChatRoomInput } from '../user/user-update-one-required-without-users-on-chat-room.input';

@InputType()
export class UsersOnChatRoomUpdateInput {
    @Field(() => Date, { nullable: true })
    createdAt?: Date | string;

    @Field(() => UserUpdateOneRequiredWithoutUsersOnChatRoomInput, { nullable: true })
    user?: UserUpdateOneRequiredWithoutUsersOnChatRoomInput;

    @Field(() => ChatRoomUpdateOneRequiredWithoutUsersOnChatRoomInput, {
        nullable: true,
    })
    chatRoom?: ChatRoomUpdateOneRequiredWithoutUsersOnChatRoomInput;
}
