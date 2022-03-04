import { Field, InputType } from '@nestjs/graphql';

import { MessageCreateWithoutChatRoomInput } from './message-create-without-chat-room.input';
import { MessageUpdateWithoutChatRoomInput } from './message-update-without-chat-room.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@InputType()
export class MessageUpsertWithWhereUniqueWithoutChatRoomInput {
    @Field(() => MessageWhereUniqueInput, { nullable: false })
    where!: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutChatRoomInput, { nullable: false })
    update!: MessageUpdateWithoutChatRoomInput;

    @Field(() => MessageCreateWithoutChatRoomInput, { nullable: false })
    create!: MessageCreateWithoutChatRoomInput;
}
