import { ArgsType, Field } from '@nestjs/graphql';

import { UsersOnChatRoomUpdateInput } from './users-on-chat-room-update.input';
import { UsersOnChatRoomWhereUniqueInput } from './users-on-chat-room-where-unique.input';

@ArgsType()
export class UpdateOneUsersOnChatRoomArgs {
    @Field(() => UsersOnChatRoomUpdateInput, { nullable: false })
    data!: UsersOnChatRoomUpdateInput;

    @Field(() => UsersOnChatRoomWhereUniqueInput, { nullable: false })
    where!: UsersOnChatRoomWhereUniqueInput;
}
