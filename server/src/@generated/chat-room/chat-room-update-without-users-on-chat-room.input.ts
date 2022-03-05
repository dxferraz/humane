import { Field, InputType } from '@nestjs/graphql';

import { MessageUpdateManyWithoutChatRoomInput } from '../message/message-update-many-without-chat-room.input';

@InputType()
export class ChatRoomUpdateWithoutUsersOnChatRoomInput {
    @Field(() => MessageUpdateManyWithoutChatRoomInput, { nullable: true })
    messages?: MessageUpdateManyWithoutChatRoomInput;
}
