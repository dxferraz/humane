import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatRoomCreateWithoutMessagesInput } from './chat-room-create-without-messages.input';
import { ChatRoomCreateOrConnectWithoutMessagesInput } from './chat-room-create-or-connect-without-messages.input';
import { ChatRoomWhereUniqueInput } from './chat-room-where-unique.input';

@InputType()
export class ChatRoomCreateNestedOneWithoutMessagesInput {

    @Field(() => ChatRoomCreateWithoutMessagesInput, {nullable:true})
    create?: ChatRoomCreateWithoutMessagesInput;

    @Field(() => ChatRoomCreateOrConnectWithoutMessagesInput, {nullable:true})
    connectOrCreate?: ChatRoomCreateOrConnectWithoutMessagesInput;

    @Field(() => ChatRoomWhereUniqueInput, {nullable:true})
    connect?: ChatRoomWhereUniqueInput;
}
