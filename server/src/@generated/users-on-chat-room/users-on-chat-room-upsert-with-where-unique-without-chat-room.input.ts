import { Field, InputType } from '@nestjs/graphql';

import { UsersOnChatRoomCreateWithoutChatRoomInput } from './users-on-chat-room-create-without-chat-room.input';
import { UsersOnChatRoomUpdateWithoutChatRoomInput } from './users-on-chat-room-update-without-chat-room.input';
import { UsersOnChatRoomWhereUniqueInput } from './users-on-chat-room-where-unique.input';

@InputType()
export class UsersOnChatRoomUpsertWithWhereUniqueWithoutChatRoomInput {
    @Field(() => UsersOnChatRoomWhereUniqueInput, { nullable: false })
    where!: UsersOnChatRoomWhereUniqueInput;

    @Field(() => UsersOnChatRoomUpdateWithoutChatRoomInput, { nullable: false })
    update!: UsersOnChatRoomUpdateWithoutChatRoomInput;

    @Field(() => UsersOnChatRoomCreateWithoutChatRoomInput, { nullable: false })
    create!: UsersOnChatRoomCreateWithoutChatRoomInput;
}
