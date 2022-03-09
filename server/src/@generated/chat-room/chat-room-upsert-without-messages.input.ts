import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatRoomUpdateWithoutMessagesInput } from './chat-room-update-without-messages.input';
import { ChatRoomCreateWithoutMessagesInput } from './chat-room-create-without-messages.input';

@InputType()
export class ChatRoomUpsertWithoutMessagesInput {

    @Field(() => ChatRoomUpdateWithoutMessagesInput, {nullable:false})
    update!: ChatRoomUpdateWithoutMessagesInput;

    @Field(() => ChatRoomCreateWithoutMessagesInput, {nullable:false})
    create!: ChatRoomCreateWithoutMessagesInput;
}
