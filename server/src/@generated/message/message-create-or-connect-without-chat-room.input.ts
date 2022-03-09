import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageCreateWithoutChatRoomInput } from './message-create-without-chat-room.input';

@InputType()
export class MessageCreateOrConnectWithoutChatRoomInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    where!: MessageWhereUniqueInput;

    @Field(() => MessageCreateWithoutChatRoomInput, {nullable:false})
    create!: MessageCreateWithoutChatRoomInput;
}
