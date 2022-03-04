import { Field, InputType } from '@nestjs/graphql';

import { MessageCreateWithoutChatRoomInput } from './message-create-without-chat-room.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@InputType()
export class MessageCreateOrConnectWithoutChatRoomInput {
    @Field(() => MessageWhereUniqueInput, { nullable: false })
    where!: MessageWhereUniqueInput;

    @Field(() => MessageCreateWithoutChatRoomInput, { nullable: false })
    create!: MessageCreateWithoutChatRoomInput;
}
