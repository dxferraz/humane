import { Field, InputType } from '@nestjs/graphql';

import { UserCreateOrConnectWithoutUsersOnChatRoomInput } from './user-create-or-connect-without-users-on-chat-room.input';
import { UserCreateWithoutUsersOnChatRoomInput } from './user-create-without-users-on-chat-room.input';
import { UserUpdateWithoutUsersOnChatRoomInput } from './user-update-without-users-on-chat-room.input';
import { UserUpsertWithoutUsersOnChatRoomInput } from './user-upsert-without-users-on-chat-room.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUpdateOneRequiredWithoutUsersOnChatRoomInput {
    @Field(() => UserCreateWithoutUsersOnChatRoomInput, { nullable: true })
    create?: UserCreateWithoutUsersOnChatRoomInput;

    @Field(() => UserCreateOrConnectWithoutUsersOnChatRoomInput, { nullable: true })
    connectOrCreate?: UserCreateOrConnectWithoutUsersOnChatRoomInput;

    @Field(() => UserUpsertWithoutUsersOnChatRoomInput, { nullable: true })
    upsert?: UserUpsertWithoutUsersOnChatRoomInput;

    @Field(() => UserWhereUniqueInput, { nullable: true })
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutUsersOnChatRoomInput, { nullable: true })
    update?: UserUpdateWithoutUsersOnChatRoomInput;
}
