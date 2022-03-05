import { Field, InputType } from '@nestjs/graphql';

import { ChatRoomUpdateOneWithoutMessagesInput } from '../chat-room/chat-room-update-one-without-messages.input';

@InputType()
export class MessageUpdateWithoutAuthorInput {
    @Field(() => String, { nullable: true })
    message?: string;

    @Field(() => Date, { nullable: true })
    timeStamp?: Date | string;

    @Field(() => ChatRoomUpdateOneWithoutMessagesInput, { nullable: true })
    chatRoom?: ChatRoomUpdateOneWithoutMessagesInput;
}
