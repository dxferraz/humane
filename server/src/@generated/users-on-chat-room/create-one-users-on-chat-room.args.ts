import { ArgsType, Field } from '@nestjs/graphql';

import { UsersOnChatRoomCreateInput } from './users-on-chat-room-create.input';

@ArgsType()
export class CreateOneUsersOnChatRoomArgs {
    @Field(() => UsersOnChatRoomCreateInput, { nullable: false })
    data!: UsersOnChatRoomCreateInput;
}
