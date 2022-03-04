import { Field, InputType, Int } from '@nestjs/graphql';

import { MessageUncheckedUpdateManyWithoutChatRoomInput } from '../message/message-unchecked-update-many-without-chat-room.input';

@InputType()
export class ChatRoomUncheckedUpdateWithoutUsersOnChatRoomInput {
    @Field(() => Int, { nullable: true })
    id?: number;

    @Field(() => MessageUncheckedUpdateManyWithoutChatRoomInput, { nullable: true })
    messages?: MessageUncheckedUpdateManyWithoutChatRoomInput;
}
