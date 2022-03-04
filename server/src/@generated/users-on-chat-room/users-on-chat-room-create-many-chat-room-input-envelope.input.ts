import { Field, InputType } from '@nestjs/graphql';

import { UsersOnChatRoomCreateManyChatRoomInput } from './users-on-chat-room-create-many-chat-room.input';

@InputType()
export class UsersOnChatRoomCreateManyChatRoomInputEnvelope {
    @Field(() => [UsersOnChatRoomCreateManyChatRoomInput], { nullable: false })
    data!: Array<UsersOnChatRoomCreateManyChatRoomInput>;

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean;
}
