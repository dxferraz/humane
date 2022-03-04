import { Field, InputType } from '@nestjs/graphql';

import { ChatRoomUpdateOneWithoutMessagesInput } from '../chat-room/chat-room-update-one-without-messages.input';
import { UserUpdateOneRequiredWithoutMessagesInput } from '../user/user-update-one-required-without-messages.input';

@InputType()
export class MessageUpdateInput {
    @Field(() => String, { nullable: true })
    message?: string;

    @Field(() => Date, { nullable: true })
    timeStamp?: Date | string;

    @Field(() => UserUpdateOneRequiredWithoutMessagesInput, { nullable: true })
    author?: UserUpdateOneRequiredWithoutMessagesInput;

    @Field(() => ChatRoomUpdateOneWithoutMessagesInput, { nullable: true })
    chatRoom?: ChatRoomUpdateOneWithoutMessagesInput;
}
