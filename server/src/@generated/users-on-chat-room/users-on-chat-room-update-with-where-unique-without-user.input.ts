import { Field, InputType } from '@nestjs/graphql';

import { UsersOnChatRoomUpdateWithoutUserInput } from './users-on-chat-room-update-without-user.input';
import { UsersOnChatRoomWhereUniqueInput } from './users-on-chat-room-where-unique.input';

@InputType()
export class UsersOnChatRoomUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => UsersOnChatRoomWhereUniqueInput, { nullable: false })
    where!: UsersOnChatRoomWhereUniqueInput;

    @Field(() => UsersOnChatRoomUpdateWithoutUserInput, { nullable: false })
    data!: UsersOnChatRoomUpdateWithoutUserInput;
}
