import { Field, InputType } from '@nestjs/graphql';

import { MessageCreateNestedManyWithoutChatRoomInput } from '../message/message-create-nested-many-without-chat-room.input';

@InputType()
export class ChatRoomCreateWithoutUsersOnChatRoomInput {
    @Field(() => MessageCreateNestedManyWithoutChatRoomInput, { nullable: true })
    messages?: MessageCreateNestedManyWithoutChatRoomInput;
}
