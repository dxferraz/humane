import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatRoomWhereUniqueInput } from './chat-room-where-unique.input';
import { ChatRoomCreateWithoutMessagesInput } from './chat-room-create-without-messages.input';

@InputType()
export class ChatRoomCreateOrConnectWithoutMessagesInput {

    @Field(() => ChatRoomWhereUniqueInput, {nullable:false})
    where!: ChatRoomWhereUniqueInput;

    @Field(() => ChatRoomCreateWithoutMessagesInput, {nullable:false})
    create!: ChatRoomCreateWithoutMessagesInput;
}
