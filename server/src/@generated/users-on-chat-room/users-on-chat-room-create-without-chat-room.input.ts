import { Field, InputType } from '@nestjs/graphql';

import { UserCreateNestedOneWithoutUsersOnChatRoomInput } from '../user/user-create-nested-one-without-users-on-chat-room.input';

@InputType()
export class UsersOnChatRoomCreateWithoutChatRoomInput {
    @Field(() => Date, { nullable: true })
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutUsersOnChatRoomInput, { nullable: false })
    user!: UserCreateNestedOneWithoutUsersOnChatRoomInput;
}
