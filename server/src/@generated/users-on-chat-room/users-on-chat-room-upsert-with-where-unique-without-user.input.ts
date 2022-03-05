import { Field, InputType } from '@nestjs/graphql';

import { UsersOnChatRoomCreateWithoutUserInput } from './users-on-chat-room-create-without-user.input';
import { UsersOnChatRoomUpdateWithoutUserInput } from './users-on-chat-room-update-without-user.input';
import { UsersOnChatRoomWhereUniqueInput } from './users-on-chat-room-where-unique.input';

@InputType()
export class UsersOnChatRoomUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => UsersOnChatRoomWhereUniqueInput, { nullable: false })
    where!: UsersOnChatRoomWhereUniqueInput;

    @Field(() => UsersOnChatRoomUpdateWithoutUserInput, { nullable: false })
    update!: UsersOnChatRoomUpdateWithoutUserInput;

    @Field(() => UsersOnChatRoomCreateWithoutUserInput, { nullable: false })
    create!: UsersOnChatRoomCreateWithoutUserInput;
}
