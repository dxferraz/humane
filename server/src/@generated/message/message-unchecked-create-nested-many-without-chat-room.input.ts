import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutChatRoomInput } from './message-create-without-chat-room.input';
import { MessageCreateOrConnectWithoutChatRoomInput } from './message-create-or-connect-without-chat-room.input';
import { MessageCreateManyChatRoomInputEnvelope } from './message-create-many-chat-room-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@InputType()
export class MessageUncheckedCreateNestedManyWithoutChatRoomInput {

    @Field(() => [MessageCreateWithoutChatRoomInput], {nullable:true})
    create?: Array<MessageCreateWithoutChatRoomInput>;

    @Field(() => [MessageCreateOrConnectWithoutChatRoomInput], {nullable:true})
    connectOrCreate?: Array<MessageCreateOrConnectWithoutChatRoomInput>;

    @Field(() => MessageCreateManyChatRoomInputEnvelope, {nullable:true})
    createMany?: MessageCreateManyChatRoomInputEnvelope;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    connect?: Array<MessageWhereUniqueInput>;
}
