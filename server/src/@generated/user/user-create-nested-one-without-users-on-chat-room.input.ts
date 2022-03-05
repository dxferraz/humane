import { Field, InputType } from '@nestjs/graphql';

import { UserCreateOrConnectWithoutUsersOnChatRoomInput } from './user-create-or-connect-without-users-on-chat-room.input';
import { UserCreateWithoutUsersOnChatRoomInput } from './user-create-without-users-on-chat-room.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutUsersOnChatRoomInput {
    @Field(() => UserCreateWithoutUsersOnChatRoomInput, { nullable: true })
    create?: UserCreateWithoutUsersOnChatRoomInput;

    @Field(() => UserCreateOrConnectWithoutUsersOnChatRoomInput, { nullable: true })
    connectOrCreate?: UserCreateOrConnectWithoutUsersOnChatRoomInput;

    @Field(() => UserWhereUniqueInput, { nullable: true })
    connect?: UserWhereUniqueInput;
}
