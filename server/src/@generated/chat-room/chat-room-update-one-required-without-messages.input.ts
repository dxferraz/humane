import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatRoomCreateWithoutMessagesInput } from './chat-room-create-without-messages.input';
import { ChatRoomCreateOrConnectWithoutMessagesInput } from './chat-room-create-or-connect-without-messages.input';
import { ChatRoomUpsertWithoutMessagesInput } from './chat-room-upsert-without-messages.input';
import { ChatRoomWhereUniqueInput } from './chat-room-where-unique.input';
import { ChatRoomUpdateWithoutMessagesInput } from './chat-room-update-without-messages.input';

@InputType()
export class ChatRoomUpdateOneRequiredWithoutMessagesInput {

    @Field(() => ChatRoomCreateWithoutMessagesInput, {nullable:true})
    create?: ChatRoomCreateWithoutMessagesInput;

    @Field(() => ChatRoomCreateOrConnectWithoutMessagesInput, {nullable:true})
    connectOrCreate?: ChatRoomCreateOrConnectWithoutMessagesInput;

    @Field(() => ChatRoomUpsertWithoutMessagesInput, {nullable:true})
    upsert?: ChatRoomUpsertWithoutMessagesInput;

    @Field(() => ChatRoomWhereUniqueInput, {nullable:true})
    connect?: ChatRoomWhereUniqueInput;

    @Field(() => ChatRoomUpdateWithoutMessagesInput, {nullable:true})
    update?: ChatRoomUpdateWithoutMessagesInput;
}
