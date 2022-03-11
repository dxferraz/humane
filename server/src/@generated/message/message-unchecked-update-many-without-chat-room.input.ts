import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutChatRoomInput } from './message-create-without-chat-room.input';
import { MessageCreateOrConnectWithoutChatRoomInput } from './message-create-or-connect-without-chat-room.input';
import { MessageUpsertWithWhereUniqueWithoutChatRoomInput } from './message-upsert-with-where-unique-without-chat-room.input';
import { MessageCreateManyChatRoomInputEnvelope } from './message-create-many-chat-room-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithWhereUniqueWithoutChatRoomInput } from './message-update-with-where-unique-without-chat-room.input';
import { MessageUpdateManyWithWhereWithoutChatRoomInput } from './message-update-many-with-where-without-chat-room.input';
import { MessageScalarWhereInput } from './message-scalar-where.input';

@InputType()
export class MessageUncheckedUpdateManyWithoutChatRoomInput {

    @Field(() => [MessageCreateWithoutChatRoomInput], {nullable:true})
    create?: Array<MessageCreateWithoutChatRoomInput>;

    @Field(() => [MessageCreateOrConnectWithoutChatRoomInput], {nullable:true})
    connectOrCreate?: Array<MessageCreateOrConnectWithoutChatRoomInput>;

    @Field(() => [MessageUpsertWithWhereUniqueWithoutChatRoomInput], {nullable:true})
    upsert?: Array<MessageUpsertWithWhereUniqueWithoutChatRoomInput>;

    @Field(() => MessageCreateManyChatRoomInputEnvelope, {nullable:true})
    createMany?: MessageCreateManyChatRoomInputEnvelope;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    connect?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    set?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    disconnect?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    delete?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageUpdateWithWhereUniqueWithoutChatRoomInput], {nullable:true})
    update?: Array<MessageUpdateWithWhereUniqueWithoutChatRoomInput>;

    @Field(() => [MessageUpdateManyWithWhereWithoutChatRoomInput], {nullable:true})
    updateMany?: Array<MessageUpdateManyWithWhereWithoutChatRoomInput>;

    @Field(() => [MessageScalarWhereInput], {nullable:true})
    deleteMany?: Array<MessageScalarWhereInput>;
}
