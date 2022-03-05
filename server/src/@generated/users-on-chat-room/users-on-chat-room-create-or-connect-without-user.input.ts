import { Field, InputType } from '@nestjs/graphql';

import { UsersOnChatRoomCreateWithoutUserInput } from './users-on-chat-room-create-without-user.input';
import { UsersOnChatRoomWhereUniqueInput } from './users-on-chat-room-where-unique.input';

@InputType()
export class UsersOnChatRoomCreateOrConnectWithoutUserInput {
    @Field(() => UsersOnChatRoomWhereUniqueInput, { nullable: false })
    where!: UsersOnChatRoomWhereUniqueInput;

    @Field(() => UsersOnChatRoomCreateWithoutUserInput, { nullable: false })
    create!: UsersOnChatRoomCreateWithoutUserInput;
}
