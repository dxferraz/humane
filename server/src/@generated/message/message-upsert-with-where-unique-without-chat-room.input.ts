import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithoutChatRoomInput } from './message-update-without-chat-room.input';
import { MessageCreateWithoutChatRoomInput } from './message-create-without-chat-room.input';

@InputType()
export class MessageUpsertWithWhereUniqueWithoutChatRoomInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    where!: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutChatRoomInput, {nullable:false})
    update!: MessageUpdateWithoutChatRoomInput;

    @Field(() => MessageCreateWithoutChatRoomInput, {nullable:false})
    create!: MessageCreateWithoutChatRoomInput;
}
