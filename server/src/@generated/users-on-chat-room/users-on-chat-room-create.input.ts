import { Field, InputType } from '@nestjs/graphql';

import { ChatRoomCreateNestedOneWithoutUsersOnChatRoomInput } from '../chat-room/chat-room-create-nested-one-without-users-on-chat-room.input';
import { UserCreateNestedOneWithoutUsersOnChatRoomInput } from '../user/user-create-nested-one-without-users-on-chat-room.input';

@InputType()
export class UsersOnChatRoomCreateInput {
    @Field(() => Date, { nullable: true })
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutUsersOnChatRoomInput, { nullable: false })
    user!: UserCreateNestedOneWithoutUsersOnChatRoomInput;

    @Field(() => ChatRoomCreateNestedOneWithoutUsersOnChatRoomInput, {
        nullable: false,
    })
    chatRoom!: ChatRoomCreateNestedOneWithoutUsersOnChatRoomInput;
}
