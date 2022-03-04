import { Field, InputType } from '@nestjs/graphql';

import { MessageUpdateWithoutChatRoomInput } from './message-update-without-chat-room.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@InputType()
export class MessageUpdateWithWhereUniqueWithoutChatRoomInput {
    @Field(() => MessageWhereUniqueInput, { nullable: false })
    where!: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutChatRoomInput, { nullable: false })
    data!: MessageUpdateWithoutChatRoomInput;
}
