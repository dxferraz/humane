import { ArgsType, Field } from '@nestjs/graphql';

import { UsersOnChatRoomWhereUniqueInput } from './users-on-chat-room-where-unique.input';

@ArgsType()
export class FindUniqueUsersOnChatRoomArgs {
    @Field(() => UsersOnChatRoomWhereUniqueInput, { nullable: false })
    where!: UsersOnChatRoomWhereUniqueInput;
}