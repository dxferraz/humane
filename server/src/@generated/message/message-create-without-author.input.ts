import { Field, InputType } from '@nestjs/graphql';

import { ChatRoomCreateNestedOneWithoutMessagesInput } from '../chat-room/chat-room-create-nested-one-without-messages.input';

@InputType()
export class MessageCreateWithoutAuthorInput {
    @Field(() => String, { nullable: false })
    message!: string;

    @Field(() => Date, { nullable: true })
    timeStamp?: Date | string;

    @Field(() => ChatRoomCreateNestedOneWithoutMessagesInput, { nullable: true })
    chatRoom?: ChatRoomCreateNestedOneWithoutMessagesInput;
}
