import { Field, InputType } from '@nestjs/graphql';

import { UsersOnChatRoomUserIdChatRoomIdCompoundUniqueInput } from './users-on-chat-room-user-id-chat-room-id-compound-unique.input';

@InputType()
export class UsersOnChatRoomWhereUniqueInput {
    @Field(() => UsersOnChatRoomUserIdChatRoomIdCompoundUniqueInput, { nullable: true })
    userId_chatRoomId?: UsersOnChatRoomUserIdChatRoomIdCompoundUniqueInput;
}
