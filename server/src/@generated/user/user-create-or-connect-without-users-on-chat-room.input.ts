import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutUsersOnChatRoomInput } from './user-create-without-users-on-chat-room.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateOrConnectWithoutUsersOnChatRoomInput {
    @Field(() => UserWhereUniqueInput, { nullable: false })
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutUsersOnChatRoomInput, { nullable: false })
    create!: UserCreateWithoutUsersOnChatRoomInput;
}
