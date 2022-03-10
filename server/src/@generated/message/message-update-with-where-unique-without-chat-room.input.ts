import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithoutChatRoomInput } from './message-update-without-chat-room.input';

@InputType()
export class MessageUpdateWithWhereUniqueWithoutChatRoomInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    where!: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutChatRoomInput, {nullable:false})
    data!: MessageUpdateWithoutChatRoomInput;
}
