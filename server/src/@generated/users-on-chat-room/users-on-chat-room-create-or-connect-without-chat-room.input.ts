import { Field, InputType } from '@nestjs/graphql';

import { UsersOnChatRoomCreateWithoutChatRoomInput } from './users-on-chat-room-create-without-chat-room.input';
import { UsersOnChatRoomWhereUniqueInput } from './users-on-chat-room-where-unique.input';

@InputType()
export class UsersOnChatRoomCreateOrConnectWithoutChatRoomInput {
    @Field(() => UsersOnChatRoomWhereUniqueInput, { nullable: false })
    where!: UsersOnChatRoomWhereUniqueInput;

    @Field(() => UsersOnChatRoomCreateWithoutChatRoomInput, { nullable: false })
    create!: UsersOnChatRoomCreateWithoutChatRoomInput;
}
