import { Field, InputType } from '@nestjs/graphql';

import { UsersOnChatRoomUpdateWithoutChatRoomInput } from './users-on-chat-room-update-without-chat-room.input';
import { UsersOnChatRoomWhereUniqueInput } from './users-on-chat-room-where-unique.input';

@InputType()
export class UsersOnChatRoomUpdateWithWhereUniqueWithoutChatRoomInput {
    @Field(() => UsersOnChatRoomWhereUniqueInput, { nullable: false })
    where!: UsersOnChatRoomWhereUniqueInput;

    @Field(() => UsersOnChatRoomUpdateWithoutChatRoomInput, { nullable: false })
    data!: UsersOnChatRoomUpdateWithoutChatRoomInput;
}
