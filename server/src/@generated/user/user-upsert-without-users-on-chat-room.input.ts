import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutUsersOnChatRoomInput } from './user-create-without-users-on-chat-room.input';
import { UserUpdateWithoutUsersOnChatRoomInput } from './user-update-without-users-on-chat-room.input';

@InputType()
export class UserUpsertWithoutUsersOnChatRoomInput {
    @Field(() => UserUpdateWithoutUsersOnChatRoomInput, { nullable: false })
    update!: UserUpdateWithoutUsersOnChatRoomInput;

    @Field(() => UserCreateWithoutUsersOnChatRoomInput, { nullable: false })
    create!: UserCreateWithoutUsersOnChatRoomInput;
}
