import { Field, InputType } from '@nestjs/graphql';

import { ChatRoomCreateWithoutUsersOnChatRoomInput } from './chat-room-create-without-users-on-chat-room.input';
import { ChatRoomWhereUniqueInput } from './chat-room-where-unique.input';

@InputType()
export class ChatRoomCreateOrConnectWithoutUsersOnChatRoomInput {
    @Field(() => ChatRoomWhereUniqueInput, { nullable: false })
    where!: ChatRoomWhereUniqueInput;

    @Field(() => ChatRoomCreateWithoutUsersOnChatRoomInput, { nullable: false })
    create!: ChatRoomCreateWithoutUsersOnChatRoomInput;
}
