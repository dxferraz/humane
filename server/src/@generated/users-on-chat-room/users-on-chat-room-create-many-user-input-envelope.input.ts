import { Field, InputType } from '@nestjs/graphql';

import { UsersOnChatRoomCreateManyUserInput } from './users-on-chat-room-create-many-user.input';

@InputType()
export class UsersOnChatRoomCreateManyUserInputEnvelope {
    @Field(() => [UsersOnChatRoomCreateManyUserInput], { nullable: false })
    data!: Array<UsersOnChatRoomCreateManyUserInput>;

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean;
}
